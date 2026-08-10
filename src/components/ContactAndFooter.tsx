import { useState } from "react";
import { BRAND, whatsappLink } from "../data/site";
import { asset } from "../lib/assets";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal">
            <p className="text-xs tracking-[0.25em] text-sacred-gold uppercase">Contact</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-ivory md:text-5xl">
              Begin Your Journey Today
            </h2>
            <p className="mt-4 text-ivory-muted">
              Reach out for consultations, remedies, or general inquiries. Atul Ji responds within 24 hours.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sacred-gold/15 text-sacred-gold">
                  📞
                </span>
                <div>
                  <p className="text-xs text-ivory-muted">Phone / WhatsApp</p>
                  <a href={`tel:${BRAND.phone}`} className="font-medium text-ivory hover:text-sacred-gold">
                    {BRAND.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sacred-gold/15 text-sacred-gold">
                  ✉️
                </span>
                <div>
                  <p className="text-xs text-ivory-muted">Email</p>
                  <a href={`mailto:${BRAND.email}`} className="font-medium text-ivory hover:text-sacred-gold">
                    {BRAND.email}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sacred-gold/15 text-sacred-gold">
                  📍
                </span>
                <div>
                  <p className="text-xs text-ivory-muted">Location</p>
                  <p className="font-medium text-ivory">{BRAND.location}</p>
                </div>
              </li>
            </ul>

            <a
              href={whatsappLink("Namaste Atul Ji, I want to connect with you.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          <div className="reveal glass-card rounded-2xl p-6 md:p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-ivory">Send a Message</h3>
                <div>
                  <label htmlFor="contact-name" className="mb-1 block text-sm text-ivory-muted">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    className="input-field w-full rounded-lg px-4 py-3 outline-none focus:border-sacred-gold sm:py-2.5"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="mb-1 block text-sm text-ivory-muted">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    className="input-field w-full rounded-lg px-4 py-3 outline-none focus:border-sacred-gold sm:py-2.5"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1 block text-sm text-ivory-muted">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="input-field w-full rounded-lg px-4 py-3 outline-none focus:border-sacred-gold sm:py-2.5"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-sacred-gold py-3 text-sm font-bold text-cosmic hover:bg-sacred-gold-light"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="py-8 text-center">
                <p className="text-4xl">🙏</p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-sacred-gold">Message Received</h3>
                <p className="mt-2 text-ivory-muted">Atul Ji will respond within 24 hours. For urgent queries, use WhatsApp.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-sacred-gold/10 bg-cosmic-light py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={asset("assets/logo.png")} alt="" className="h-10 w-10 rounded-full" />
            <div>
              <p className="font-display text-lg font-semibold text-ivory">{BRAND.name}</p>
              <p className="text-xs text-ivory-muted">{BRAND.tagline}</p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-ivory-muted">
            <a href="#services" className="hover:text-sacred-gold">
              Services
            </a>
            <a href="#about" className="hover:text-sacred-gold">
              About
            </a>
            <a href="#faq" className="hover:text-sacred-gold">
              FAQ
            </a>
            <a href="#contact" className="hover:text-sacred-gold">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-sacred-gold/10 pt-8 text-xs text-ivory-muted md:flex-row">
          <p>© 2026 {BRAND.name}. All rights reserved.</p>
          <p>Privacy Policy · Terms · Refund Policy</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Namaste Atul Ji!")}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      </svg>
    </a>
  );
}
