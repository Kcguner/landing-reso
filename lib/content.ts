import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  Compass,
  Filter,
  Flag,
  Heart,
  Images,
  MapPinned,
  Navigation,

  Sparkles,
  Users,
  UserRound,
  BookOpen,
  MoonStar,
  Handshake,
} from "lucide-react";
import type {
  FAQItem,
  FeatureItem,
  NavItem,
  PersonaItem,
  PlanCardItem,
  ShowcaseItem,
  VibeCardItem,
} from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "Özellikler", href: "#features" },
  { label: "Nasıl Çalışır?", href: "#how-it-works" },
  { label: "Pro", href: "#pro" },
  { label: "SSS", href: "#faq" },
];

export const heroContent = {
  badge: "Ses ile mekan keşfi",
  title: "Şehrin ritmini keşfet: Sessiz mi, enerjik mi?",
  description:
    "Reso, çevrendeki mekanları akustik vibe’larına göre keşfetmeni sağlar. Zen, Neutral veya Hype modunu seç; haritada sana uygun yerleri anında gör.",
  bullets: [
    { icon: Compass, text: "Haritada vibe bazlı filtreleme" },
    { icon: Users, text: "Topluluk destekli ses ölçümü ve oylama" },
    { icon: Images, text: "Mekana fotoğraf, puan ve katkı ekleme" },
  ],
  primaryCta: { label: "Hemen Keşfetmeye Başla", href: "#final-cta", icon: ArrowRight },
  secondaryCta: { label: "Pro Özelliklerini Gör", href: "#pro" },
  stores: [
    { label: "App Store", note: "Yakında / Placeholder" },
    { label: "Google Play", note: "Yakında / Placeholder" },
  ],
  footnote:
    "Ücretsiz başlayın • Pro ile daha geniş alan, daha fazla mekan, reklamsız deneyim",
} as const;

export const problemSolutionContent = {
  title: "Sadece puana göre mekan seçmek yetmez",
  description:
    "Bir mekanın iyi olması, her zaman o an için doğru mekan olduğu anlamına gelmez. Toplantı yapmak, ders çalışmak, arkadaşlarla sohbet etmek veya gece enerjisine karışmak için farklı ses seviyeleri gerekir.",
  problem: {
    title: "Klasik keşif uygulamalarında sorun",
    items: [
      "Gürültü seviyesi belirsiz",
      "Atmosfer kişisel ihtiyaca göre filtrelenemiyor",
      "Harita sonuçları bağlama göre zayıf kalıyor",
    ],
  },
  solution: {
    title: "Reso’nun yaklaşımı",
    items: [
      "Vibe odaklı keşif (Zen / Neutral / Hype)",
      "Topluluk katkısıyla canlı veri",
      "Harita + kategori + mesafe filtreleri",
      "Kullanım amacına göre hızlı karar",
    ],
  },
} as const;

export const vibeCards: VibeCardItem[] = [
  {
    mode: "zen",
    title: "Zen",
    subtitle: "Sakin, odaklı, nefes alan mekanlar",
    useCases: ["Çalışma", "Okuma", "Sakin sohbet"],
    venueTypes: ["Kafe", "Kütüphane", "Park", "Müze"],
  },
  {
    mode: "neutral",
    title: "Neutral",
    subtitle: "Dengeli ses, rahat akış",
    useCases: ["Günlük buluşmalar", "Yemek", "Planlı görüşmeler"],
    venueTypes: ["Restoran", "Tiyatro", "Fast food"],
  },
  {
    mode: "hype",
    title: "Hype",
    subtitle: "Enerjik, canlı ve hareketli",
    useCases: ["Gece planı", "Sosyalleşme", "Yüksek enerji"],
    venueTypes: ["Bar", "Pub", "Gece kulübü", "Sinema"],
  },
];

export const howItWorksSteps = [
  {
    title: "1. Vibe seç ve haritada keşfet",
    description:
      "Zen, Neutral veya Hype modunu seç. Reso haritada sana yakın mekanları vibe uyumuna göre listeler.",
    icon: MapPinned,
  },
  {
    title: "2. Mekan detayını incele",
    description:
      "Kategori, mesafe, puan ve topluluk verilerini gör. İstersen favorilere ekle, istersen yol tarifi al.",
    icon: Filter,
  },
  {
    title: "3. Katkı yap",
    description:
      "Gittiğin mekanı puanla, fotoğraf ekle ve vibe bilgisini güçlendir. Böylece herkes için daha iyi bir keşif ağı oluşur.",
    icon: BadgeCheck,
  },
] as const;

export const features: FeatureItem[] = [
  { icon: MapPinned, title: "Harita Tabanlı Keşif", description: "Map görünümünde yakın mekanları hızlıca gör." },
  { icon: Sparkles, title: "Vibe Switcher", description: "Zen / Neutral / Hype arasında anında geçiş yap." },
  { icon: Filter, title: "Kategori Filtreleri", description: "Kafe, restoran, bar, park ve daha fazlasını filtrele." },
  { icon: Users, title: "Topluluk Oylaması", description: "Mekan vibe verisi kullanıcı katkılarıyla güçlenir." },
  { icon: Images, title: "Fotoğraf Ekleme", description: "Mekanlara görsel katkı yaparak keşfi daha güvenilir hale getir." },
  { icon: Heart, title: "Favoriler", description: "Beğendiğin yerleri kaydet, sonra tekrar dön." },
  { icon: Flag, title: "Raporlama Sistemi", description: "Hatalı/kapalı/çift kayıt mekanları bildirebil." },
  { icon: Navigation, title: "Yol Tarifi", description: "Seçtiğin mekana tek dokunuşla yönlen." },
];

export const showcaseItems: ShowcaseItem[] = [
  { title: "Harita + Vibe Seçici", variant: "map" },
  { title: "Mekan Listesi ve Filtreler", variant: "list" },
  { title: "Giriş / Kayıt Ekranı", variant: "auth" },
  { title: "Reso PRO Ekranı", variant: "pro" },
];

export const proPlans: PlanCardItem[] = [
  { name: "Aylık", subtitle: "Esnek kullanım", cta: "Aylık Planı İncele" },
  {
    name: "Yıllık",
    subtitle: "Daha avantajlı uzun dönem kullanım",
    cta: "Yıllık Planı İncele",
    highlighted: true,
    badge: "En Popüler",
  },
];

export const proBenefits = [
  "20 km’ye kadar keşif alanı",
  "Mod başına daha fazla mekan görünümü",
  "Reklamsız deneyim",
  "Profil fotoğrafı / gelişmiş profil deneyimi",
  "Daha yüksek günlük katkı limiti",
] as const;

export const personas: PersonaItem[] = [
  {
    icon: BookOpen,
    title: "Öğrenciler ve freelancer’lar",
    description: "Sessiz/odaklı mekan arayanlar için Zen keşfi.",
  },
  {
    icon: Handshake,
    title: "Arkadaş buluşmaları",
    description: "Konuşulabilir ama canlı mekanlar için Neutral mod.",
  },
  {
    icon: MoonStar,
    title: "Gece hayatı sevenler",
    description: "Enerjisi yüksek mekanları Hype modunda bulun.",
  },
  {
    icon: UserRound,
    title: "Yeni şehir keşfedenler",
    description: "Topluluk katkısıyla kısa sürede doğru mekanı yakalayın.",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "Reso nasıl çalışır?",
    answer:
      "Reso, yakınınızdaki mekanları harita üzerinde gösterir ve Zen / Neutral / Hype vibe modlarına göre filtreler. Topluluk katkıları mekan verisini güçlendirir.",
  },
  {
    question: "Mekan verileri nasıl oluşuyor?",
    answer:
      "Kullanıcı katkıları, oylamalar, puanlar ve mekan bilgileri birlikte değerlendirilir. Böylece keşif sonuçları zamanla daha isabetli hale gelir.",
  },
  {
    question: "Ücretsiz kullanabilir miyim?",
    answer:
      "Evet. Reso ücretsiz olarak kullanılabilir. Pro üyelik, daha geniş keşif alanı ve ek avantajlar sunar.",
  },
  {
    question: "Reso PRO ne sağlar?",
    answer:
      "Daha geniş keşif alanı, daha fazla mekan görünümü, reklamsız deneyim ve bazı profil/katkı avantajları sağlar.",
  },
  {
    question: "Uygulama hangi cihazlarda çalışır?",
    answer:
      "Reso mobil cihazlar için tasarlanmıştır. Landing page tüm modern tarayıcılarda mobil ve masaüstü uyumlu çalışır.",
  },
];

export const footerColumns = [
  {
    title: "Ürün",
    links: [
      { label: "Özellikler", href: "#features" },
      { label: "Nasıl Çalışır?", href: "#how-it-works" },
      { label: "Pro", href: "#pro" },
    ],
  },
  {
    title: "Şirket",
    links: [
      { label: "Hakkında", href: "#" },
      { label: "İletişim", href: "#" },
    ],
  },
  {
    title: "Yasal",
    links: [
      { label: "Gizlilik Politikası", href: "#" },
      { label: "Kullanım Koşulları", href: "#" },
    ],
  },
] as const;

export const footerSocials = [
  { label: "Instagram", href: "#", icon: BellRing },
  { label: "X", href: "#", icon: Compass },
  { label: "TikTok", href: "#", icon: Sparkles },
] as const;
