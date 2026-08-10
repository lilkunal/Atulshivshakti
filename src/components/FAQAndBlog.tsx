import { useState } from "react";
import { FAQS, BLOG_POSTS } from "../data/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-y border-sacred-gold/10 bg-cosmic-light py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="reveal text-center">
          <p className="text-xs tracking-[0.25em] text-sacred-gold uppercase">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ivory">Common Questions</h2>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((faq, i) => (
            <div key={faq.q} className="reveal glass-card overflow-hidden rounded-xl">
              <button
                type="button"
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                aria-expanded={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="pr-4 font-medium text-ivory">{faq.q}</span>
                <span className="text-sacred-gold">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="border-t border-sacred-gold/10 px-5 pb-4">
                  <p className="pt-3 text-sm leading-relaxed text-ivory-muted">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.25em] text-sacred-gold uppercase">Knowledge</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ivory">Astrology Insights</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="reveal glass-card gold-border-glow group rounded-2xl p-6 transition hover:-translate-y-1">
              <p className="text-xs text-sacred-gold">
                {post.date} · {post.readTime}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-ivory group-hover:text-sacred-gold-light">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-ivory-muted">{post.excerpt}</p>
              <span className="mt-4 inline-block text-sm font-medium text-sacred-gold">Read more →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
