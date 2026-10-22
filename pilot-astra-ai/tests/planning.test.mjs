import test from 'node:test';
import assert from 'node:assert/strict';
import { contentForecast, outreachForecast, wholeNumber, buildEnquiry } from '../lib/planning.mjs';

test('source content scenario and edited inputs', () => {
  assert.deepEqual(contentForecast('5','6','30'), { monthly:900, sixMonths:5400, monthlyViews:9000, sixMonthViews:54000 });
  assert.equal(contentForecast('2','3','20').monthly,120);
  assert.equal(contentForecast('0','6','30').monthly,0);
});
test('outreach rates use total emails, then replies and qualification', () => {
  assert.deepEqual(outreachForecast('500','22'), { monthly:11000, sixMonths:66000, opens:29700, replies:2640, qualified:792, customers:95 });
  assert.equal(outreachForecast('100','20').monthly,2000);
});
test('invalid inputs and unsafe totals never produce misleading forecasts', () => {
  for(const input of ['', ' ', '-1', '1.5', 'NaN', 'Infinity', '9007199254740992']) assert.equal(wholeNumber(input),null);
  assert.equal(contentForecast('','6','30'),null);
  assert.equal(outreachForecast('-2','22'),null);
  assert.equal(outreachForecast('500','32'),null);
  assert.equal(contentForecast('5','6','32'),null);
  assert.equal(contentForecast('9007199254740991','6','30'),null);
});
test('email draft preserves unicode and query characters without injecting headers', () => {
  const draft=buildEnquiry({name:'A & B',email:'a+b@example.com',company:'Factory\r\nBcc: other@example.com',service:'SEO / GEO',message:'₹ growth? A&B = 10%\nSecond line'});
  const url=new URL(draft.href);
  assert.equal(url.pathname,'info@bharataivyapari.com');
  assert.equal(url.searchParams.get('subject'),'Pilot Astra AI strategy enquiry — Factory Bcc: other@example.com');
  assert.ok(url.searchParams.get('body').includes('₹ growth? A&B = 10%\nSecond line'));
  assert.ok(!url.searchParams.has('bcc'));
  assert.ok(draft.text.startsWith('To: info@bharataivyapari.com'));
});
