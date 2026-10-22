"use client";

import { useRef, useState, type FormEvent } from "react";
import { buildEnquiry } from "@/lib/planning.mjs";
import { serviceLinks } from "@/lib/home-content";

export default function EnquiryForm() {
  const [values, setValues] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [status, setStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const draftRef = useRef<HTMLTextAreaElement>(null);
  const fallbackRef = useRef<HTMLDetailsElement>(null);
  const draft = buildEnquiry(values);
  const update = (key: keyof typeof values, value: string) => { setValues(v => ({ ...v, [key]: value })); setStatus(""); };
  const valid = () => {
    const form = formRef.current;
    if (!form) return false;
    for (const control of Array.from(form.elements)) {
      if (control instanceof HTMLInputElement || control instanceof HTMLTextAreaElement || control instanceof HTMLSelectElement) {
        control.setCustomValidity(control.required && !control.value.trim() ? "Please complete this field." : "");
      }
    }
    return form.reportValidity();
  };
  const prepare = (event: FormEvent) => {
    event.preventDefault();
    if (!valid()) return;
    if (draft.href.length > 2000) {
      if (fallbackRef.current) fallbackRef.current.open = true;
      setStatus("Your enquiry is ready. For this longer message, copy the draft below and send it using your email app.");
      return;
    }
    setStatus("Your enquiry is prepared. Complete and send it in your email app. If it did not open, copy the draft below.");
    window.location.href = draft.href;
  };
  const copy = async () => {
    if (!valid()) return;
    try {
      await navigator.clipboard.writeText(draft.text);
      setStatus("Enquiry copied. Paste it into your email app and send it to info@bharataivyapari.com.");
    } catch {
      if (fallbackRef.current) fallbackRef.current.open = true;
      draftRef.current?.focus(); draftRef.current?.select();
      setStatus("Automatic copying is unavailable. Select and copy the prepared enquiry below.");
    }
  };
  return (
    <div className="pa-contact-form-wrap">
      <form className="pa-contact-form" action="mailto:info@bharataivyapari.com" method="post" encType="text/plain" ref={formRef} onSubmit={prepare} onInput={e => { if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) e.target.setCustomValidity(""); }}>
        <div className="pa-form-row"><label htmlFor="enquiry-name">Full name<input id="enquiry-name" name="name" autoComplete="name" required maxLength={100} value={values.name} onChange={e => update("name", e.target.value)} /></label><label htmlFor="enquiry-email">Business email<input id="enquiry-email" name="email" type="email" autoComplete="email" required maxLength={254} value={values.email} onChange={e => update("email", e.target.value)} /></label></div>
        <div className="pa-form-row"><label htmlFor="enquiry-company">Company name<input id="enquiry-company" name="company" autoComplete="organization" required maxLength={150} value={values.company} onChange={e => update("company", e.target.value)} /></label><label htmlFor="enquiry-service">Service interest<select id="enquiry-service" name="service" required value={values.service} onChange={e => update("service", e.target.value)}><option value="">Select a system</option>{serviceLinks.map(service => <option key={service.href}>{service.title}</option>)}<option>Connected Growth System</option></select></label></div>
        <label htmlFor="enquiry-message">What would you like to connect?<textarea id="enquiry-message" name="message" rows={4} required maxLength={2000} placeholder="Your current offer, enquiry flow, or the bottleneck you want to solve." value={values.message} onChange={e => update("message", e.target.value)} /></label>
        <div className="pa-form-actions"><button className="pa-button pa-button-blue" type="submit">Open email draft <span aria-hidden="true">↗</span></button><button className="pa-copy-button" type="button" onClick={copy}>Copy enquiry</button></div>
        <p className="pa-model-note">Your email application will open with a prepared enquiry. Please review and send it to contact our team. Nothing is submitted to a server or stored here.</p>
      </form>
      <p className="pa-form-status" role="status" aria-live="polite">{status}</p>
      <details className="pa-email-fallback" ref={fallbackRef}><summary>Prefer to send it yourself? <span aria-hidden="true">+</span></summary><p>Send your enquiry to <a href="mailto:info@bharataivyapari.com">info@bharataivyapari.com</a>.</p><label htmlFor="prepared-enquiry">Prepared enquiry<textarea id="prepared-enquiry" ref={draftRef} readOnly value={draft.text} rows={8} /></label></details>
      <noscript><p>Email your name, company, service interest and enquiry to <a href="mailto:info@bharataivyapari.com">info@bharataivyapari.com</a>.</p></noscript>
    </div>
  );
}
