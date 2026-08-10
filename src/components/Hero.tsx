import { Starfield } from "./Starfield";
import { MotionHeroText } from "./MotionReveal";
import { BRAND, whatsappLink } from "../data/site";
import { asset } from "../lib/assets";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[calc(100dvh-7.5rem)] overflow-hidden cosmic-grid pb-16 pt-6 sm:pb-20 sm:pt-10">
      <Starfield />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-20 pt-8 text-center md:px-6 md:pt-16 lg:flex-row lg:gap-12 lg:text-left">
        <div className="flex-1">
          <MotionHeroText>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sacred-gold/25 bg-sacred-gold/5 px-4 py-1.5 text-xs tracking-widest text-sacred-gold uppercase">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-sacred-gold" />
              Trusted Vedic Guidance Since 2010
            </p>

            <h1 className="font-display text-4xl leading-[1.05] font-bold text-ivory sm:text-5xl md:text-6xl lg:text-7xl">
              Clarity Through
              <span className="mt-2 block gold-gradient-text italic">Cosmic Wisdom</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory-muted sm:text-lg lg:mx-0">
              <span className="font-display text-xl text-sacred-gold-light">{BRAND.hindiTagline}</span>
              <br />
              Personalized Kundli analysis, marriage matching, Vastu & remedies — guided by{" "}
              <strong className="text-ivory">{BRAND.name}</strong>, {BRAND.experience} years of authentic Vedic practice.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
              <motion.a
                href="#services"
                whileHover={reduce ? undefined : { scale: 1.03 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="inline-flex min-h-[48px] items-center rounded-full bg-sacred-gold px-8 py-3.5 text-sm font-semibold text-cosmic transition hover:bg-sacred-gold-light"
              >
                Explore Services
              </motion.a>
              <motion.a
                href="#kundli"
                whileHover={reduce ? undefined : { scale: 1.03 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="inline-flex min-h-[48px] items-center rounded-full border border-sacred-gold/40 px-8 py-3.5 text-sm font-semibold text-sacred-gold transition hover:border-sacred-gold hover:bg-sacred-gold/10"
              >
                Free Kundli →
              </motion.a>
            </div>
          </MotionHeroText>

          <dl className="reveal mt-10 grid grid-cols-3 gap-3 border-t border-sacred-gold/15 pt-6 sm:mt-12 sm:gap-4 sm:pt-8">
            <div>
              <dt className="font-display text-3xl font-bold text-sacred-gold">{BRAND.experience}</dt>
              <dd className="mt-1 text-xs text-ivory-muted">Years Experience</dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-bold text-sacred-gold">{BRAND.consultations}</dt>
              <dd className="mt-1 text-xs text-ivory-muted">Consultations</dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-bold text-sacred-gold">{BRAND.rating}★</dt>
              <dd className="mt-1 text-xs text-ivory-muted">{BRAND.reviews} Reviews</dd>
            </div>
          </dl>
        </div>

        <motion.div
          className="relative mt-10 flex flex-1 justify-center lg:mt-0"
          initial={reduce ? false : { opacity: 0, x: 40 }}
          animate={reduce ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-8 animate-pulse-glow rounded-full bg-gradient-to-br from-shakti-rose/20 via-transparent to-shiva-blue/20 blur-3xl" />
            <div className="glass-card relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10">
              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border-2 border-sacred-gold/30 bg-cosmic-mist sm:h-32 sm:w-32">
                <img src={asset("assets/logo.png")} alt="Atul Shiv Shakti" className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-ivory">Atul Shiv Shakti</h2>
              <p className="mt-1 text-sm text-sacred-gold">Vedic Astrologer · {BRAND.location}</p>

              <ul className="mt-6 space-y-3 text-left text-sm text-ivory-muted">
                <li className="flex items-center gap-2">
                  <span className="text-sacred-gold">✦</span> Kundli · Milan · Vastu · Numerology
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sacred-gold">✦</span> Phone & WhatsApp Consultations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sacred-gold">✦</span> NRI Clients Welcome
                </li>
              </ul>

              <a
                href={whatsappLink("Namaste Atul Ji, I would like to schedule a consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-xl bg-gradient-to-r from-sacred-gold to-sacred-gold-light py-3 text-center text-sm font-bold text-cosmic transition hover:opacity-90"
              >
                WhatsApp Atul Ji
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#trust" className="flex flex-col items-center gap-2 text-xs text-ivory-muted">
          <span>Scroll</span>
          <svg className="h-5 w-5 text-sacred-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
