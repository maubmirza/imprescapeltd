import { useState, useEffect, type FormEvent } from 'react';
import { Mail, Phone, CheckCircle, Send, Clock, Shield, AlertCircle, Copy, Check } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data/imprescapeData';

interface QuoteSectionProps {
  initialService?: string;
}

export function QuoteSection({ initialService }: QuoteSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    projectType: initialService || '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string>('');
  const [copiedRef, setCopiedRef] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, projectType: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanPhone = formData.phone.replace(/[\s()-]/g, '');
    if (cleanPhone.length < 9) {
      setErrorMessage('Please enter a valid UK contact telephone number (at least 9 digits).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Generate unique reference ID
    const refCode = `IMP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    setTimeout(() => {
      try {
        // Persist enquiry to localStorage so enquiry data is retained
        const existingRaw = localStorage.getItem('imprescape_enquiries');
        const existing = existingRaw ? JSON.parse(existingRaw) : [];
        const newEnquiry = {
          referenceId: refCode,
          submittedAt: new Date().toISOString(),
          ...formData,
        };
        localStorage.setItem('imprescape_enquiries', JSON.stringify([newEnquiry, ...existing]));
      } catch {
        // Safe failover if localStorage unavailable
      }

      setReferenceId(refCode);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleCopyRef = () => {
    if (referenceId) {
      navigator.clipboard.writeText(referenceId);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      postcode: '',
      projectType: '',
      message: '',
    });
    setErrorMessage(null);
    setIsSuccess(false);
    setReferenceId('');
  };

  return (
    <section id="quote" className="py-20 bg-[#2E3324] text-white relative overflow-hidden">
      {/* Subtle architectural grid backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#4D553C_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Text & Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#A3AF88] block">
              Ready to Start
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
              Get a free, no-obligation survey and quote.
            </h2>

            <p className="text-[#D1CFB9] text-base leading-relaxed max-w-xl">
              Tell us about your project and we will arrange a visit at a time that suits you. We inspect the ground, take measurements, discuss finishes, and provide a fixed written price.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="bg-[#3D4430] hover:bg-[#4A5238] border border-[#4F583F] text-white px-5 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 transition-colors"
                aria-label={`Send email to ${COMPANY_DETAILS.email}`}
              >
                <Mail className="w-4 h-4 text-[#A3AF88]" />
                <span>Email us</span>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="border border-[#4F583F] hover:border-[#A3AF88] text-white px-5 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 transition-colors"
                aria-label={`Call Imprescape at ${COMPANY_DETAILS.phone}`}
              >
                <Phone className="w-4 h-4 text-[#A3AF88]" />
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>
            </div>

            <div className="pt-6 border-t border-[#3D4430] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#B8BAA9]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#A3AF88] shrink-0" />
                <span>Typical response within 2 business hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#A3AF88] shrink-0" />
                <span>No obligation &amp; no pushy follow-ups</span>
              </div>
            </div>
          </div>

          {/* Right Clean Natural Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAF9F6] text-[#2D2D2D] p-6 sm:p-8 rounded-3xl shadow-xl border border-[#E5E2D9]">
              
              {isSuccess ? (
                <div className="py-6 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#5A6344] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1C14]">
                    Survey Request Received
                  </h3>

                  <div className="inline-flex items-center gap-2 bg-[#F0EDE4] border border-[#E5E2D9] px-3.5 py-1.5 rounded-full text-xs text-[#3A3D32] font-mono">
                    <span>Ref: {referenceId}</span>
                    <button
                      onClick={handleCopyRef}
                      className="text-[#5A6344] hover:text-[#3A3D32] transition-colors cursor-pointer"
                      title="Copy reference code"
                      aria-label="Copy reference code"
                    >
                      {copiedRef ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <p className="text-sm text-[#5C5C5C] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#1A1C14]">{formData.name}</span>. Our team will review your notes regarding{' '}
                    <span className="font-medium text-[#1A1C14]">{formData.projectType || 'your project'}</span> and contact you on{' '}
                    <span className="font-semibold text-[#1A1C14]">{formData.phone}</span> shortly to schedule your on-site survey.
                  </p>

                  <div className="pt-3 border-t border-[#E5E2D9]">
                    <button
                      onClick={handleReset}
                      className="text-xs font-semibold text-[#5A6344] hover:text-[#3A3D32] underline cursor-pointer"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {errorMessage && (
                    <div className="p-3 bg-[#FDF2F2] border border-[#F8D7DA] text-[#842029] rounded-xl text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label htmlFor="quote-name" className="block text-xs font-semibold text-[#3A3D32] mb-1">
                      Full Name <span className="text-[#A67C52]">*</span>
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      placeholder="e.g. David Harrison"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errorMessage) setErrorMessage(null);
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1CFB9] bg-[#F2F1EC] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#5A6344] focus:border-transparent text-sm text-[#1A1C14]"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quote-phone" className="block text-xs font-semibold text-[#3A3D32] mb-1">
                        Phone Number <span className="text-[#A67C52]">*</span>
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        required
                        placeholder="e.g. 07700 900077"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errorMessage) setErrorMessage(null);
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1CFB9] bg-[#F2F1EC] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#5A6344] focus:border-transparent text-sm text-[#1A1C14]"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-email" className="block text-xs font-semibold text-[#3A3D32] mb-1">
                        Email Address <span className="text-[#A67C52]">*</span>
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        required
                        placeholder="you@domain.co.uk"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errorMessage) setErrorMessage(null);
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1CFB9] bg-[#F2F1EC] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#5A6344] focus:border-transparent text-sm text-[#1A1C14]"
                      />
                    </div>
                  </div>

                  {/* Postcode & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quote-postcode" className="block text-xs font-semibold text-[#3A3D32] mb-1">
                        Postcode / Town
                      </label>
                      <input
                        id="quote-postcode"
                        type="text"
                        placeholder="e.g. SK10 2BX"
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1CFB9] bg-[#F2F1EC] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#5A6344] focus:border-transparent text-sm text-[#1A1C14]"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-project-type" className="block text-xs font-semibold text-[#3A3D32] mb-1">
                        Project Type
                      </label>
                      <select
                        id="quote-project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1CFB9] bg-[#F2F1EC] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#5A6344] focus:border-transparent text-sm text-[#1A1C14]"
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Multiple Services / Full Package">Multiple Services / Full Package</option>
                        <option value="Other Domestic Construction">Other Domestic Construction</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="quote-message" className="block text-xs font-semibold text-[#3A3D32] mb-1">
                      Tell us about your project
                    </label>
                    <textarea
                      id="quote-message"
                      rows={3}
                      placeholder="Brief details about dimensions, materials, or your timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1CFB9] bg-[#F2F1EC] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#5A6344] focus:border-transparent text-sm text-[#1A1C14]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#5A6344] hover:bg-[#4A5238] active:scale-[0.99] text-white py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Sending enquiry...</span>
                    ) : (
                      <>
                        <span>Request Free Quote</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-[#7A7E6B] pt-1">
                    We use your details only to respond to your enquiry. Never shared with third parties.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

