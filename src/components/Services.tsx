import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SERVICES, formatPrice, whatsappLink, type Service } from "../data/site";
import { MotionReveal, MotionStagger, MotionItem } from "./MotionReveal";

type BookingModalProps = {
  service: Service | null;
  onClose: () => void;
};

function BookingModal({ service, onClose }: BookingModalProps) {
  const reduce = useReducedMotion();
  if (!service) return null;

  const message = `Namaste Atul Ji,\n\nI want to book: ${service.title} (${formatPrice(service.price)})\n\nPlease share available slots.`;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-cosmic/80 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      initial={reduce ? false : { opacity: 0 }}
      animate={reduce ? undefined : { opacity: 1 }}
      exit={reduce ? undefined : { opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="glass-card w-full max-w-md rounded-t-2xl p-6 sm:rounded-2xl md:p-8"
        initial={reduce ? false : { y: 40, opacity: 0 }}
        animate={reduce ? undefined : { y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="booking-title" className="font-display text-2xl font-semibold text-ivory">
          Book {service.title}
        </h3>
        <p className="mt-2 text-sm text-ivory-muted">{service.description}</p>
        <p className="mt-4 font-display text-3xl text-sacred-gold">{formatPrice(service.price)}</p>
        <p className="text-xs text-ivory-muted">{service.duration} session</p>

        <div className="mt-6 space-y-3">
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl bg-sacred-gold py-3 text-center text-sm font-bold text-cosmic"
          >
            Continue on WhatsApp
          </a>
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-xl border border-sacred-gold/30 py-3 text-sm text-ivory-muted hover:text-ivory"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <MotionReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.25em] text-sacred-gold uppercase">Our Services</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ivory sm:text-4xl md:text-5xl">
            Guidance for Every Life Chapter
          </h2>
          <p className="mt-4 text-sm text-ivory-muted sm:text-base">
            Session-based consultations — no per-minute charges. Complete analysis with remedies included.
          </p>
        </MotionReveal>

        <MotionStagger className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <MotionItem key={service.id}>
            <article
              className="glass-card gold-border-glow group relative flex h-full flex-col rounded-2xl p-5 sm:p-6 transition-all duration-300"
            >
              {service.popular && (
                <span className="absolute -top-3 right-4 rounded-full bg-shakti-rose px-3 py-0.5 text-xs font-semibold text-ivory">
                  Most Popular
                </span>
              )}
              <p className="text-xs tracking-wider text-sacred-gold">{service.hindi}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ivory">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory-muted">{service.description}</p>
              <div className="mt-6 flex items-end justify-between border-t border-sacred-gold/10 pt-4">
                <div>
                  <p className="font-display text-2xl font-bold text-sacred-gold">{formatPrice(service.price)}</p>
                  <p className="text-xs text-ivory-muted">{service.duration}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(service)}
                  className="rounded-full bg-sacred-gold/15 px-5 py-2 text-sm font-semibold text-sacred-gold transition group-hover:bg-sacred-gold group-hover:text-cosmic"
                >
                  Book Now
                </button>
              </div>
            </article>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>

      <BookingModal service={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
