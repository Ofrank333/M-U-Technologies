"use client";
import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", company: "", phone: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} className="text-emerald-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Message Received!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Thank you, <strong>{form.name}</strong>. A senior consultant will contact you within 2 business hours.
        </p>
        <p className="text-sm text-gray-500">Check <strong>{form.email}</strong> for a confirmation and calendar invite.</p>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Book a Free Consultation</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Full Name *</label>
            <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
              placeholder="Jane Smith" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Work Email *</label>
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
              placeholder="jane@company.com" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Company *</label>
            <input required type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
              placeholder="Acme Corporation" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Phone</label>
            <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
              placeholder="+1 (555) 000-0000" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Primary Interest</label>
          <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm">
            <option value="">Select a service area...</option>
            <option>Network Automation</option>
            <option>AI Integration / AIOps</option>
            <option>Network Security / Zero Trust</option>
            <option>IT Infrastructure</option>
            <option>IT Procurement</option>
            <option>General Inquiry</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Tell Us About Your Challenge</label>
          <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm resize-none"
            placeholder="Describe your current network challenges..." />
        </div>
        <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5 disabled:opacity-70">
          <span>{loading ? "Sending..." : "Book My Free Consultation"}</span>
          {!loading && <Send size={15} className="relative z-10" />}
        </button>
        <p className="text-xs text-center text-gray-400 dark:text-gray-500">
          By submitting, you agree to our Privacy Policy. We never share your information.
        </p>
      </form>
    </>
  );
}
