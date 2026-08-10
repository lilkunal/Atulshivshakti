import { TESTIMONIALS, BRAND } from "../data/site";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="reveal flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-xs tracking-[0.25em] text-sacred-gold uppercase">Testimonials</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-ivory">Trusted by Seekers Across India</h2>
          </div>
          <div className="glass-card rounded-xl px-6 py-4 text-center">
            <p className="font-display text-4xl font-bold text-sacred-gold">{BRAND.rating}</p>
            <p className="text-sm text-ivory-muted">{BRAND.reviews} Google Reviews</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="reveal glass-card rounded-2xl p-6 md:p-8">
              <div className="flex gap-1 text-sacred-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-ivory-muted">&ldquo;{t.text}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-3 border-t border-sacred-gold/10 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sacred-gold/20 font-display text-lg font-bold text-sacred-gold">
                  {t.name[0]}
                </div>
                <div>
                  <cite className="not-italic font-medium text-ivory">{t.name}</cite>
                  <p className="text-xs text-ivory-muted">
                    {t.city} · {t.service}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
