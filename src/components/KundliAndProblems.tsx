import { useState } from "react";
import { LIFE_PROBLEMS, whatsappLink } from "../data/site";

export function LifeProblems() {
  return (
    <section className="border-y border-sacred-gold/10 bg-cosmic-light py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.25em] text-sacred-gold uppercase">Life Challenges</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ivory">
            Facing a Problem? Find Your Path
          </h2>
          <p className="mt-4 text-ivory-muted">
            Select your concern — Atul Ji will recommend the right consultation and Vedic remedy.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LIFE_PROBLEMS.map((problem) => (
            <a
              key={problem.id}
              href={whatsappLink(`Namaste Atul Ji, I need guidance for: ${problem.title} (${problem.hindi})`)}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal glass-card gold-border-glow flex items-center gap-4 rounded-xl p-5 transition hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sacred-gold/10 text-2xl">
                {problem.icon}
              </span>
              <div>
                <p className="font-medium text-ivory">{problem.title}</p>
                <p className="text-sm text-sacred-gold">{problem.hindi}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

type KundliResult = {
  rashi: string;
  nakshatra: string;
  lagna: string;
  message: string;
};

export function FreeKundli() {
  const [result, setResult] = useState<KundliResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;

    setTimeout(() => {
      setResult({
        rashi: "Simha (Leo)",
        nakshatra: "Magha",
        lagna: "Kanya (Virgo)",
        message: `${name}, your basic chart indicates strong leadership qualities with Jupiter's benevolent influence. Book a full Kundali Vishleshan for complete dasha analysis and remedies.`,
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <section id="kundli" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="reveal">
            <p className="text-xs tracking-[0.25em] text-sacred-gold uppercase">Free Tool</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-ivory md:text-5xl">
              Generate Your Basic Kundli
            </h2>
            <p className="mt-4 text-ivory-muted">
              Enter birth details for instant basic chart insights. Full analysis available through personalized consultation.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-ivory-muted">
              <li className="flex gap-2">
                <span className="text-sacred-gold">01</span> Rashi, Nakshatra & Lagna identification
              </li>
              <li className="flex gap-2">
                <span className="text-sacred-gold">02</span> Basic planetary position overview
              </li>
              <li className="flex gap-2">
                <span className="text-sacred-gold">03</span> Upgrade to full 45-min Vishleshan anytime
              </li>
            </ul>
          </div>

          <div className="reveal glass-card rounded-2xl p-6 md:p-8">
            {!result ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm text-ivory-muted">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="input-field w-full rounded-lg px-4 py-3 outline-none focus:border-sacred-gold sm:py-2.5"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="dob" className="mb-1 block text-sm text-ivory-muted">
                      Date of Birth
                    </label>
                    <input
                      id="dob"
                      name="dob"
                      type="date"
                      required
                      className="input-field w-full rounded-lg px-4 py-3 outline-none focus:border-sacred-gold sm:py-2.5"
                    />
                  </div>
                  <div>
                    <label htmlFor="tob" className="mb-1 block text-sm text-ivory-muted">
                      Time of Birth
                    </label>
                    <input
                      id="tob"
                      name="tob"
                      type="time"
                      required
                      className="input-field w-full rounded-lg px-4 py-3 outline-none focus:border-sacred-gold sm:py-2.5"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="pob" className="mb-1 block text-sm text-ivory-muted">
                    Place of Birth
                  </label>
                  <input
                    id="pob"
                    name="pob"
                    required
                    className="input-field w-full rounded-lg px-4 py-3 outline-none focus:border-sacred-gold sm:py-2.5"
                    placeholder="City, State"
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="mb-1 block text-sm text-ivory-muted">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    required
                    className="input-field w-full rounded-lg px-4 py-3 outline-none focus:border-sacred-gold sm:py-2.5"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-sacred-gold py-3 text-sm font-bold text-cosmic transition hover:bg-sacred-gold-light disabled:opacity-60"
                >
                  {loading ? "Calculating..." : "Generate Basic Kundli — Free"}
                </button>
              </form>
            ) : (
              <div>
                <h3 className="font-display text-2xl font-semibold text-sacred-gold">Your Basic Kundli</h3>
                <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-cosmic p-4">
                    <dt className="text-xs text-ivory-muted">Rashi</dt>
                    <dd className="mt-1 font-medium text-ivory">{result.rashi}</dd>
                  </div>
                  <div className="rounded-lg bg-cosmic p-4">
                    <dt className="text-xs text-ivory-muted">Nakshatra</dt>
                    <dd className="mt-1 font-medium text-ivory">{result.nakshatra}</dd>
                  </div>
                  <div className="rounded-lg bg-cosmic p-4">
                    <dt className="text-xs text-ivory-muted">Lagna</dt>
                    <dd className="mt-1 font-medium text-ivory">{result.lagna}</dd>
                  </div>
                </dl>
                <p className="mt-6 text-sm leading-relaxed text-ivory-muted">{result.message}</p>
                <a
                  href="#services"
                  className="mt-6 block w-full rounded-xl border border-sacred-gold py-3 text-center text-sm font-semibold text-sacred-gold hover:bg-sacred-gold/10"
                >
                  Book Full Analysis →
                </a>
                <button
                  type="button"
                  onClick={() => setResult(null)}
                  className="mt-3 w-full text-sm text-ivory-muted hover:text-ivory"
                >
                  Generate another
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
