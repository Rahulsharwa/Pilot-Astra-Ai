"""Extract reviewed local source content into explicit, safe page data. No runtime HTML injection."""
from html.parser import HTMLParser
from pathlib import Path
import json,re,hashlib
ROOT=Path(__file__).resolve().parents[1]
ALIASES={'ai-website-development':'ai-website','dynamic-landing-page-system':'dynamic-landing','ai-whatsapp-bot':'whatsapp-bot','ai-sdr-outreach':'ai-sdr','social-media-automation':'social-automation','seo,-geo-&-blog-automation':'seo-geo','ai-video-content-engine':'video-engine','ai-calling-system':'ai-calling'}
class Parser(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.root={'tag':'root','children':[]};self.stack=[self.root]
 def handle_starttag(self,tag,attrs):
  n={'tag':tag,'children':[]};a=dict(attrs)
  if tag=='a':
   href=a.get('href','')
   if href.startswith('/services/'):href='/services/'+ALIASES.get(href.split('/')[-1],href.split('/')[-1])
   n['href']=href
  self.stack[-1]['children'].append(n)
  if tag not in ['br','img','input','meta','link','hr']:self.stack.append(n)
 def handle_endtag(self,tag):
  for i in range(len(self.stack)-1,0,-1):
   if self.stack[i]['tag']==tag:self.stack=self.stack[:i];break
 def handle_data(self,s):self.stack[-1]['children'].append(s)
def txt(n):return n if isinstance(n,str) else ''.join(txt(c) for c in n['children'])
def kids(n,tag=None):return [c for c in n['children'] if isinstance(c,dict) and (tag is None or c['tag']==tag)]
def find(n,tag):
 if not isinstance(n,dict):return []
 return ([n] if n['tag']==tag else [])+sum([find(c,tag) for c in n['children']],[])
def read(name):
 raw=(ROOT/(name+'.md')).read_text();p=Parser();p.feed(re.search(r'```html\s*([\s\S]*?)```',raw)[1]);return find(p.root,'main')[0]
def flatten(n):
 out=[]
 for c in kids(n):out.extend(flatten(c) if c['tag']=='section' else [c])
 return out
def inline(n):
 return [{'text':txt(c),'href':c['href']} if isinstance(c,dict) and c['tag']=='a' else {'text':txt(c)} for c in n['children'] if txt(c)]
def block(n):
 if n['tag'] in ['ul','ol']:return {'type':n['tag'],'items':[inline(c) for c in kids(n,'li')]}
 return {'type':n['tag'],'content':inline(n)}
def document(name):
 nodes=flatten(read(name));h=next(i for i,n in enumerate(nodes) if n['tag']=='h1');tail=nodes[h+1:];sections=[];intro=[]
 for n in tail:
  if n['tag']=='h2':sections.append({'title':txt(n),'blocks':[]})
  elif sections:sections[-1]['blocks'].append(block(n))
  else:intro.append(block(n))
 return {'title':txt(nodes[h]),'intro':intro,'sections':sections}
slugs=['ai-website','dynamic-landing','whatsapp-bot','ai-sdr','social-automation','seo-geo','video-engine','ai-calling']
services=[]
for slug in slugs:
 nodes=flatten(read('services-'+slug));texts=[txt(n) for n in nodes]
 def after(prefix):
  i=next(i for i,s in enumerate(texts) if s.startswith(prefix));return nodes[i+1]
 def section_nodes(prefix):
  i=next(i for i,s in enumerate(texts) if s.startswith(prefix));end=next((j for j in range(i+1,len(nodes)) if nodes[j]['tag']=='h2'),len(nodes));return nodes[i+1:end]
 name=texts[0].split(' · ')[1];dl=next(n for n in nodes if n['tag']=='dl');faq=[]
 for n in kids(dl):
  if n['tag']=='dt':faq.append({'question':txt(n),'answer':''})
  else:faq[-1]['answer']=txt(n).replace('.;', '; ').replace('..','.')
 rates=[float(x) for x in re.findall(r'([\d.]+)%',next(s for s in texts if s.startswith('Traffic lift')))]
 vals=next(s for s in texts if s.startswith('Starting inputs')).split(': ')[1].split(' · ');defaults=[float(re.sub('[^0-9.]','',v)) for v in vals]
 cost=section_nodes('One setup fee');delivery=section_nodes('How is ')
 services.append({'slug':slug,'name':name,'title':texts[1],'description':texts[2],'definition':txt(after('What is ')),'problems':[txt(c) for c in kids(after('What problems'),'li')],'includes':[txt(c) for c in kids(after('What does'),'li')],'bestFit':next(s for s in texts if s.startswith('BEST FIT:')).removeprefix('BEST FIT: '),'delivery':[txt(c) for n in delivery if n['tag']=='ol' for c in kids(n,'li')],'cost':[block(n) for n in cost],'faq':faq,'rates':rates,'defaults':defaults,'calculatorDisclaimer':next(s for s in texts if s.startswith('Estimated ROI')),'nextTitle':next(s for s in texts if s.startswith('Ready to use')),'nextCopy':next(s for s in texts if s.startswith('Share your current'))})
cases=[]
for slug in ['industrial-manufacturer-lead-engine','retail-brand-whatsapp-automation','d2c-ecommerce-outreach-system']:
 nodes=flatten(read('work-'+slug));h=next(i for i,n in enumerate(nodes) if n['tag']=='h1');ps=[txt(n) for n in nodes if n['tag']=='p'];sections=[]
 for i,n in enumerate(nodes):
  if n['tag']=='h2' and txt(n) in ['Where they were stuck','What we built','What changed']:
   sections.append({'title':txt(n),'blocks':[block(nodes[i+1])]})
 cases.append({'slug':slug,'category':txt(nodes[h-1]),'title':txt(nodes[h]),'description':txt(nodes[h+1]),'byline':ps[2],'services':[{'title':txt(n),'href':n['href']} for n in find(read('work-'+slug),'a') if n['href'].startswith('/services/')],'outcomes':next(s for s in ps if ' · ' in s and not s.startswith(('BY ','MANUFACTURING','RETAIL','ECOMMERCE'))),'sections':sections})
indexes={name:document(name) for name in ['about','services','work','contact','privacy-policy','terms','disclaimer']}
output={'services':services,'cases':cases,'pages':indexes,'sourceHashes':{p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in ROOT.glob('*.md') if p.name not in ['README.md','AGENTS.md']}}
(ROOT/'lib/site-content.json').write_text(json.dumps(output,ensure_ascii=False,indent=2)+'\n')
print('Extracted',len(services),'services,',len(cases),'case studies and',len(indexes),'pages.')
