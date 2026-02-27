"use client";

import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const REVENUE_OPTIONS = [
  { value: "", label: "Select range" },
  { value: "under-10k", label: "Under $10k" },
  { value: "10k-50k", label: "$10k – $50k" },
  { value: "50k-100k", label: "$50k – $100k" },
  { value: "100k-250k", label: "$100k – $250k" },
  { value: "250k-500k", label: "$250k – $500k" },
  { value: "500k-plus", label: "$500k+" },
];

const BUDGET_OPTIONS = [
  { value: "", label: "Select range" },
  { value: "under-5k", label: "Under $5k" },
  { value: "5k-15k", label: "$5k – $15k" },
  { value: "15k-30k", label: "$15k – $30k" },
  { value: "30k-50k", label: "$30k – $50k" },
  { value: "50k-plus", label: "$50k+" },
];

const TIMELINE_OPTIONS = [
  { value: "", label: "Select timeline" },
  { value: "asap", label: "ASAP" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "6-plus-months", label: "6+ months" },
  { value: "exploring", label: "Exploring options" },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  revenueRange: string;
  budgetRange: string;
  timeline: string;
  mainBottleneck: string;
  impactIfUnsolved: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  revenueRange?: string;
  budgetRange?: string;
  timeline?: string;
  mainBottleneck?: string;
  impactIfUnsolved?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function QualificationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    revenueRange: "",
    budgetRange: "",
    timeline: "",
    mainBottleneck: "",
    impactIfUnsolved: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    else if (formData.name.trim().length < 2) newErrors.name = "Min 2 characters";

    if (!formData.email.trim()) newErrors.email = "Required";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format";

    if (!formData.company.trim()) newErrors.company = "Required";

    if (!formData.revenueRange) newErrors.revenueRange = "Required";

    if (!formData.budgetRange) newErrors.budgetRange = "Required";

    if (!formData.timeline) newErrors.timeline = "Required";

    if (!formData.mainBottleneck.trim()) newErrors.mainBottleneck = "Required";
    else if (formData.mainBottleneck.trim().length < 50)
      newErrors.mainBottleneck = "Please provide more detail (min 50 characters)";

    if (!formData.impactIfUnsolved.trim()) newErrors.impactIfUnsolved = "Required";
    else if (formData.impactIfUnsolved.trim().length < 50)
      newErrors.impactIfUnsolved = "Please provide more detail (min 50 characters)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Qualification form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      revenueRange: "",
      budgetRange: "",
      timeline: "",
      mainBottleneck: "",
      impactIfUnsolved: "",
    });
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 bg-white dark:bg-background-section border rounded-lg focus:outline-none focus:ring-1 transition-colors text-gray-900 dark:text-white placeholder-gray-500 ${
      errors[field]
        ? "border-red-500/50 focus:ring-red-500/50"
        : "border-gray-200 dark:border-white/10 focus:ring-accent focus:border-accent"
    }`;

  const labelClass = "block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2";

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent mb-6">
          <ArrowRight className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Submission received</h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          Thank you. I review all submissions personally. If there’s a fit, I’ll be in touch within a few business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass("name")}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-500/90 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass("email")}
            placeholder="you@company.com"
          />
          {errors.email && (
            <p className="text-red-500/90 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={inputClass("company")}
          placeholder="Company or brand name"
        />
        {errors.company && (
          <p className="text-red-500/90 text-xs mt-1">{errors.company}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        <div>
          <label htmlFor="revenueRange" className={labelClass}>
            Monthly revenue range
          </label>
          <select
            id="revenueRange"
            name="revenueRange"
            value={formData.revenueRange}
            onChange={handleChange}
            className={inputClass("revenueRange")}
          >
            {REVENUE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.revenueRange && (
            <p className="text-red-500/90 text-xs mt-1">{errors.revenueRange}</p>
          )}
        </div>
        <div>
          <label htmlFor="budgetRange" className={labelClass}>
            Budget range
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className={inputClass("budgetRange")}
          >
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.budgetRange && (
            <p className="text-red-500/90 text-xs mt-1">{errors.budgetRange}</p>
          )}
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className={inputClass("timeline")}
          >
            {TIMELINE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.timeline && (
            <p className="text-red-500/90 text-xs mt-1">{errors.timeline}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="mainBottleneck" className={labelClass}>
          Main bottleneck
        </label>
        <textarea
          id="mainBottleneck"
          name="mainBottleneck"
          value={formData.mainBottleneck}
          onChange={handleChange}
          rows={4}
          className={`${inputClass("mainBottleneck")} resize-none`}
          placeholder="What’s the primary technical or business constraint you’re facing?"
        />
        {errors.mainBottleneck && (
          <p className="text-red-500/90 text-xs mt-1">{errors.mainBottleneck}</p>
        )}
      </div>

      <div>
        <label htmlFor="impactIfUnsolved" className={labelClass}>
          What happens if this problem isn’t solved?
        </label>
        <textarea
          id="impactIfUnsolved"
          name="impactIfUnsolved"
          value={formData.impactIfUnsolved}
          onChange={handleChange}
          rows={4}
          className={`${inputClass("impactIfUnsolved")} resize-none`}
          placeholder="Cost of inaction—revenue impact, opportunity cost, or strategic risk."
        />
        {errors.impactIfUnsolved && (
          <p className="text-red-500/90 text-xs mt-1">{errors.impactIfUnsolved}</p>
        )}
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full sm:w-auto px-10 py-4 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
        >
          Submit qualification
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-gray-600 dark:text-gray-500 text-xs mt-4 max-w-sm">
          Submissions are reviewed personally. I respond to qualified fits within a few business days.
        </p>
      </div>
    </form>
  );
}
