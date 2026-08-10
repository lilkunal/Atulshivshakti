export const BRAND = {
  name: "Atul Shiv Shakti",
  tagline: "Vedic Astrologer",
  hindiTagline: "ज्योतिषाचार्य",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "contact@atulshivshakti.com",
  location: "Ujjain, Madhya Pradesh",
  experience: "15+",
  consultations: "12,000+",
  rating: "4.9",
  reviews: "850+",
};

export type Service = {
  id: string;
  title: string;
  hindi: string;
  duration: string;
  price: number;
  description: string;
  popular?: boolean;
};

export const SERVICES: Service[] = [
  {
    id: "kundali",
    title: "Kundali Vishleshan",
    hindi: "कुंडली विश्लेषण",
    duration: "45 min",
    price: 5100,
    description:
      "Complete birth chart analysis — doshas, planetary periods, career, marriage & health guidance with personalized remedies.",
    popular: true,
  },
  {
    id: "matching",
    title: "Kundli Milan",
    hindi: "कुंडली मिलान",
    duration: "40 min",
    price: 5100,
    description:
      "Ashtakoot Guna Milan, Manglik dosha check, Navamsa analysis & marriage muhurat guidance for lasting harmony.",
    popular: true,
  },
  {
    id: "vastu",
    title: "Vastu Consultation",
    hindi: "वास्तु परामर्श",
    duration: "50 min",
    price: 4500,
    description:
      "Home & office energy correction without demolition — practical Vastu remedies aligned with your horoscope.",
  },
  {
    id: "numerology",
    title: "Numerology Reading",
    hindi: "अंक ज्योतिष",
    duration: "30 min",
    price: 2100,
    description:
      "Name & date-of-birth numerology — life path, karmic lessons, lucky numbers & name correction suggestions.",
  },
  {
    id: "question",
    title: "Ask One Question",
    hindi: "एक प्रश्न पूछें",
    duration: "15 min",
    price: 1500,
    description:
      "Focused answer on one specific life question — career move, relationship, property, or timing decision.",
  },
  {
    id: "remedies",
    title: "Dosha & Remedies",
    hindi: "दोष निवारण",
    duration: "35 min",
    price: 3100,
    description:
      "Kaalsarp, Pitra, Manglik & planetary dosha analysis with authentic Vedic upay, mantras & gemstone guidance.",
  },
];

export type LifeProblem = {
  id: string;
  title: string;
  hindi: string;
  icon: string;
};

export const LIFE_PROBLEMS: LifeProblem[] = [
  { id: "marriage", title: "Delayed Marriage", hindi: "विवाह में देरी", icon: "💍" },
  { id: "career", title: "Career Stagnation", hindi: "करियर अवरोध", icon: "📈" },
  { id: "health", title: "Health Concerns", hindi: "स्वास्थ्य चिंता", icon: "🪷" },
  { id: "finance", title: "Financial Block", hindi: "धन संकट", icon: "🪙" },
  { id: "family", title: "Family Discord", hindi: "पारिवारिक कलह", icon: "🏠" },
  { id: "negative", title: "Negative Energy", hindi: "नकारात्मक ऊर्जा", icon: "🛡️" },
];

export const ZODIAC_SIGNS = [
  { name: "Aries", hindi: "मेष", symbol: "♈" },
  { name: "Taurus", hindi: "वृष", symbol: "♉" },
  { name: "Gemini", hindi: "मिथुन", symbol: "♊" },
  { name: "Cancer", hindi: "कर्क", symbol: "♋" },
  { name: "Leo", hindi: "सिंह", symbol: "♌" },
  { name: "Virgo", hindi: "कन्या", symbol: "♍" },
  { name: "Libra", hindi: "तुला", symbol: "♎" },
  { name: "Scorpio", hindi: "वृश्चिक", symbol: "♏" },
  { name: "Sagittarius", hindi: "धनु", symbol: "♐" },
  { name: "Capricorn", hindi: "मकर", symbol: "♑" },
  { name: "Aquarius", hindi: "कुंभ", symbol: "♒" },
  { name: "Pisces", hindi: "मीन", symbol: "♓" },
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Verma",
    city: "Indore",
    service: "Kundali Vishleshan",
    text: "Atul Ji identified my career dasha period with remarkable accuracy. The remedies were simple and effective — I got promoted within 4 months.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    city: "Bhopal",
    service: "Kundli Milan",
    text: "Our families were unsure about compatibility. The detailed Guna Milan report and Manglik remedies gave us clarity. Happily married now!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    city: "Ahmedabad",
    service: "Vastu Consultation",
    text: "No demolition, no expensive changes — just practical Vastu corrections. Business revenue improved noticeably after implementing his suggestions.",
    rating: 5,
  },
  {
    name: "Sunita Joshi",
    city: "Jaipur",
    service: "Dosha & Remedies",
    text: "I was struggling with unexplained obstacles for years. Atul Ji found Kaalsarp dosha and prescribed authentic remedies. Life feels lighter now.",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "How do I book a consultation with Atul Ji?",
    a: "Click 'Book Consultation' on any service, fill your birth details, and pay securely. You'll receive a WhatsApp confirmation with your appointment slot within 24 hours.",
  },
  {
    q: "Are online consultations as accurate as in-person?",
    a: "Yes. Vedic astrology is based on precise birth data — date, time, and place — not physical presence. Atul Ji has conducted 12,000+ telephonic and video consultations with consistent accuracy.",
  },
  {
    q: "What details do I need for Kundli analysis?",
    a: "Your full name, date of birth, exact time of birth (as per birth certificate or hospital record), and place of birth (city/town). Even approximate time can work with birth-time rectification.",
  },
  {
    q: "Do you provide remedies and gemstones?",
    a: "Yes. All remedies are authentic Vedic upay — mantras, pooja, fasting, and gemstone recommendations. Gemstones are optional and sourced only from certified suppliers if you choose to purchase.",
  },
  {
    q: "Can NRI clients consult from abroad?",
    a: "Absolutely. Consultations are available via phone or WhatsApp video for clients in USA, UK, Canada, UAE, and Australia. Payments accepted via UPI, cards, and international transfer.",
  },
];

export const PANCHANG = {
  date: "Monday, 3 August 2026",
  tithi: "Shukla Dashami",
  nakshatra: "Moola",
  yoga: "Siddha",
  rahuKaal: "07:30 – 09:00 AM",
  abhijit: "11:48 – 12:36 PM",
  sunrise: "05:42 AM",
  sunset: "07:15 PM",
};

export const BLOG_POSTS = [
  {
    title: "Understanding Your Mahadasha Period",
    excerpt: "How planetary periods shape major life events — and what to do during challenging transits.",
    date: "28 Jul 2026",
    readTime: "6 min",
  },
  {
    title: "Manglik Dosha: Myth vs Reality",
    excerpt: "A balanced Vedic perspective on Manglik dosha, cancellation rules, and effective remedies.",
    date: "15 Jul 2026",
    readTime: "8 min",
  },
  {
    title: "5 Vastu Tips for Home Prosperity",
    excerpt: "Simple, no-demolition Vastu corrections anyone can apply this week.",
    date: "2 Jul 2026",
    readTime: "5 min",
  },
];

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}
