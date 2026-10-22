import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { serviceScenario } from '../lib/service-planning.mjs';
const source = JSON.parse(readFileSync(new URL('../lib/site-content.json', import.meta.url)));
test('website default scenario preserves source lift denominators', () => {
 const result = serviceScenario([1500,2,25000,45000],[12,35,8]);
 assert.equal(result.baseline,30);
 assert.ok(Math.abs(result.conversions-48.9888)<1e-9);
 assert.ok(Math.abs(result.addedRevenue-474720)<1e-6);
 assert.ok(Math.abs(result.roi-954.9333333333)<1e-7);
});
test('all eight sources and changed capacity use the same explicit scenario formula',()=>{
 assert.equal(source.services.length,8);
 for(const service of source.services){
  const a=serviceScenario(service.defaults,service.rates);
  assert.ok(a);
  const edited=[...service.defaults];edited[0]*=2;
  const b=serviceScenario(edited,service.rates);
  assert.ok(Math.abs(b.conversions-a.conversions*2)<1e-8);
  assert.ok(Math.abs(b.addedRevenue-a.addedRevenue*2)<1e-6);
 }
});
test('invalid values do not produce scenario outputs and effective conversion is capped',()=>{
 for(const invalid of [[-1,2,5,5],['',2,5,5],[1,101,5,5],[1,2,5,0],[1.5,2,5,5],[1,2,Infinity,5],[1,2,5,-5],[Number.MAX_SAFE_INTEGER,100,1e300,5]])assert.equal(serviceScenario(invalid,[10,10,10]),null);
 assert.equal(serviceScenario([100,100,10,10],[0,100,100]).conversions,100);
 assert.equal(serviceScenario([0,0,0,1],[10,10,10]).addedRevenue,0);
});
