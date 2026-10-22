/** Source lift percentages are relative changes. Formula is disclosed beside every calculator. */
export function serviceScenario(values, lifts) {
  if (values.length !== 4 || lifts.length !== 3 || values.some(v => String(v).trim() === "")) return null;
  const [volume, rate, value, budget] = values.map(Number);
  if (![volume, rate, value, budget, ...lifts].every(Number.isFinite) || [volume, rate, value, budget, ...lifts].some(v => v < 0) || !Number.isSafeInteger(volume) || rate > 100 || budget === 0) return null;
  const baseline = volume * rate / 100;
  const scenarioRate = Math.min(1, rate / 100 * (1 + lifts[1] / 100) * (1 + lifts[2] / 100));
  const conversions = volume * (1 + lifts[0] / 100) * scenarioRate;
  const added = conversions - baseline;
  const addedRevenue = added * value;
  const net = addedRevenue - budget;
  const roi = net / budget * 100;
  if (![baseline, conversions, added, addedRevenue, net, roi].every(n => Number.isFinite(n) && Math.abs(n) <= Number.MAX_SAFE_INTEGER)) return null;
  return { baseline, conversions, added, addedRevenue, net, roi };
}
