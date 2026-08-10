import { BRAND } from "../data/site";
import { asset } from "../lib/assets";

export function About() {
  return (
    <section id="about" className="border-y border-sacred-gold/10 bg-cosmic-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sacred-gold/10 to-shakti-rose/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-sacred-gold/20">
              <div className="flex aspect-[4/5] items-center justify-center bg-cosmic-mist">
                <img
                  src={asset("assets/logo.png")}
                  alt="Atul Shiv Shakti"
                  className="h-48 w-48 rounded-full border-4 border-sacred-gold/30 object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-5 py-3">
              <p className="font-display text-2xl font-bold text-sacred-gold">{BRAND.experience}</p>
              <p className="text-xs text-ivory-muted">Years of Practice</p>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <p className="text-xs tracking-[0.25em] text-sacred-gold uppercase">About Atul Ji</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-ivory md:text-5xl">
              Where Shiva&apos;s Discipline Meets Shakti&apos;s Intuition
            </h2>
            <p className="mt-6 leading-relaxed text-ivory-muted">
              <strong className="text-ivory">Atul Shiv Shakti</strong> is a renowned Vedic astrologer based in Ujjain — the spiritual heart of India. With over {BRAND.experience} years of dedicated study in Jyotish Shastra, he has guided {BRAND.consultations} seekers through life&apos;s most pivotal moments.
            </p>
            <p className="mt-4 leading-relaxed text-ivory-muted">
              Unlike generic online platforms, every consultation is conducted personally by Atul Ji — no assistants, no scripts. His approach blends traditional Parashari and Jaimini systems with practical, affordable remedies that respect your faith and circumstances.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Kundali Vishleshan & Dasha Analysis",
                "Marriage Compatibility (Ashtakoot)",
                "Vastu Without Demolition",
                "Kaalsarp & Manglik Remedies",
                "Numerology & Name Correction",
                "NRI Phone / Video Consultations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ivory-muted">
                  <span className="mt-0.5 text-sacred-gold">✦</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Dainik Bhaskar", "Rajasthan Patrika", "Local TV", "Radio FM"].map((media) => (
                <span
                  key={media}
                  className="rounded-full border border-sacred-gold/20 px-4 py-1.5 text-xs text-ivory-muted"
                >
                  Featured on {media}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
