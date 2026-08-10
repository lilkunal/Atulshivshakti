export function TrustBar() {
  const badges = [
    { label: "100% Authentic Vedic", icon: "🕉️" },
    { label: "Certified Astrologer", icon: "📜" },
    { label: "Secure Payments", icon: "🔒" },
    { label: "Privacy Guaranteed", icon: "🛡️" },
    { label: "NRI Consultations", icon: "🌍" },
  ];

  return (
    <section id="trust" className="border-y border-sacred-gold/10 bg-cosmic-light py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 md:gap-10 md:px-6">
        {badges.map((badge) => (
          <div key={badge.label} className="reveal flex items-center gap-2 text-sm text-ivory-muted">
            <span className="text-lg" aria-hidden="true">
              {badge.icon}
            </span>
            <span>{badge.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
