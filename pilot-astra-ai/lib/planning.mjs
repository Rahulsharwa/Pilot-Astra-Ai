export function wholeNumber(value) {
  if (String(value).trim() === "") return null;
  const number = Number(value);
  return Number.isSafeInteger(number) && number >= 0 ? number : null;
}

export function contentForecast(posts, profiles, days) {
  const inputs = [posts, profiles, days].map(wholeNumber);
  if (inputs.includes(null) || inputs[2] > 31) return null;
  const monthly = inputs[0] * inputs[1] * inputs[2];
  if (!Number.isSafeInteger(monthly * 60)) return null;
  return { monthly, sixMonths: monthly * 6, monthlyViews: monthly * 10, sixMonthViews: monthly * 60 };
}

export function outreachForecast(emails, days) {
  const inputs = [emails, days].map(wholeNumber);
  if (inputs.includes(null) || inputs[1] > 31) return null;
  const monthly = inputs[0] * inputs[1];
  const sixMonths = monthly * 6;
  if (!Number.isSafeInteger(sixMonths)) return null;
  return { monthly, sixMonths, opens: Math.round(sixMonths * .45), replies: Math.round(sixMonths * .04), qualified: Math.round(sixMonths * .04 * .3), customers: Math.round(sixMonths * .04 * .3 * .12) };
}

export function buildEnquiry({ name = "", email = "", company = "", service = "", message = "" } = {}) {
  const singleLine = value => value.trim().replace(/[\r\n]+/g, " ");
  const subject = `Pilot Astra AI strategy enquiry — ${singleLine(company)}`;
  const body = `Name: ${singleLine(name)}\r\nBusiness email: ${singleLine(email)}\r\nCompany: ${singleLine(company)}\r\nService interest: ${singleLine(service)}\r\n\r\nEnquiry:\r\n${message.trim()}`;
  return { subject, body, text: `To: info@bharataivyapari.com\nSubject: ${subject}\n\n${body}`, href: `mailto:info@bharataivyapari.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` };
}
