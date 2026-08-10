import { useState } from "react";
import { PANCHANG, ZODIAC_SIGNS } from "../data/site";

const RASHIFAL_SNIPPETS: Record<string, string> = {
  Aries: "Mars energizes career moves today. Avoid impulsive decisions after noon.",
  Taurus: "Financial gains through patience. Venus favors relationship harmony.",
  Gemini: "Communication opens new doors. Mercury supports learning and travel plans.",
  Cancer: "Family matters need attention. Moon phase supports emotional healing.",
  Leo: "Leadership opportunities arise. Stay humble in professional dealings.",
  Virgo: "Health routines bring rewards. Detail-oriented work succeeds today.",
  Libra: "Partnership decisions favored. Balance work and personal time.",
  Scorpio: "Deep introspection yields insights. Transformation energy is strong.",
  Sagittarius: "Adventure and spirituality align. Jupiter blesses long-term plans.",
  Capricorn: "Discipline pays off in business. Saturn rewards steady effort.",
  Aquarius: "Innovation and social connections flourish. Think outside convention.",
  Pisces: "Intuition guides important choices. Creative pursuits are favored.",
};

export function PanchangAndRashifal() {
  const [activeSign, setActiveSign] = useState("Leo");

  return (
    <>
      <section id="panchang" className="border-y border-sacred-gold/10 bg-cosmic-light py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-xs tracking-[0.25em] text-sacred-gold uppercase">Daily Panchang</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-ivory">Today&apos;s Cosmic Calendar</h2>
            <p className="mt-2 text-sm text-ivory-muted">{PANCHANG.date}</p>
          </div>

          <div className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Tithi", value: PANCHANG.tithi, active: true },
              { label: "Nakshatra", value: PANCHANG.nakshatra, active: true },
              { label: "Yoga", value: PANCHANG.yoga, active: false },
              { label: "Sunrise / Sunset", value: `${PANCHANG.sunrise} · ${PANCHANG.sunset}`, active: false },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-xl p-5">
                <p className="text-xs tracking-wider text-sacred-gold uppercase">{item.label}</p>
                <p className="mt-2 font-display text-xl text-ivory">{item.value}</p>
                {item.active && (
                  <span className="mt-2 inline-block rounded-full bg-sacred-gold/15 px-2 py-0.5 text-xs text-sacred-gold">
                    Active Now
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="reveal mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
              <p className="text-xs tracking-wider text-red-400 uppercase">Rahu Kaal — Avoid</p>
              <p className="mt-2 font-display text-xl text-ivory">{PANCHANG.rahuKaal}</p>
            </div>
            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
              <p className="text-xs tracking-wider text-green-400 uppercase">Abhijit Muhurat — Auspicious</p>
              <p className="mt-2 font-display text-xl text-ivory">{PANCHANG.abhijit}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="rashifal" className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-xs tracking-[0.25em] text-sacred-gold uppercase">Daily Rashifal</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-ivory">Today&apos;s Horoscope</h2>
          </div>

          <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
            {ZODIAC_SIGNS.map((sign) => (
              <button
                key={sign.name}
                type="button"
                onClick={() => setActiveSign(sign.name)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  activeSign === sign.name
                    ? "bg-sacred-gold text-cosmic font-semibold"
                    : "border border-sacred-gold/20 text-ivory-muted hover:border-sacred-gold/50"
                }`}
              >
                {sign.symbol} {sign.name}
              </button>
            ))}
          </div>

          <div className="reveal mx-auto mt-8 max-w-2xl glass-card rounded-2xl p-8 text-center">
            <p className="text-4xl">{ZODIAC_SIGNS.find((s) => s.name === activeSign)?.symbol}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-ivory">
              {activeSign}{" "}
              <span className="text-sacred-gold">
                ({ZODIAC_SIGNS.find((s) => s.name === activeSign)?.hindi})
              </span>
            </h3>
            <p className="mt-4 leading-relaxed text-ivory-muted">{RASHIFAL_SNIPPETS[activeSign]}</p>
            <p className="mt-6 text-xs text-ivory-muted">
              For detailed daily predictions, follow Atul Ji on YouTube & Instagram.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
