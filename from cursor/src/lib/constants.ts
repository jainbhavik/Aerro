export const CONTACT = {
  phone: "9993949316",
  email: "aerroev@gmail.com",
  address: "2837/E Sudama Nagar, Indore",
} as const;

export const SITE = {
  name: "AERRO EV",
  domain: "aerroev.in",
  url: "https://aerroev.in",
  tagline: "Driving Tomorrow.",
  brandLine: "ELECTRIFY THE FUTURE",
  title: "AERRO EV | A New Era of Electric Mobility",
  description:
    "AERRO EV is building the future of electric mobility in India with innovative, sustainable, and premium electric vehicles.",
  /** Official brand assets (root originals mirrored into /public) */
  logo: "/brand/logo.jpeg",
  favicon: "/favicon.jpeg",
  ogImage: "/brand/logo.jpeg",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Future Models", href: "#models" },
  { label: "Dealership", href: "#dealership" },
  { label: "Contact", href: "#contact" },
] as const;

export const FUTURE_ROUTES = [
  "/products",
  "/dealers",
  "/about",
  "/contact",
  "/blog",
  "/test-ride",
  "/finance",
] as const;

export const MODELS = [
  {
    id: "urban",
    name: "AERRO Urban",
    type: "scooter" as const,
    blurb: "City agility, refined for every commute.",
  },
  {
    id: "city",
    name: "AERRO City",
    type: "bike" as const,
    blurb: "Performance crafted for modern streets.",
  },
  {
    id: "cargo",
    name: "AERRO Cargo",
    type: "cargo" as const,
    blurb: "Commercial power with silent efficiency.",
  },
  {
    id: "pro",
    name: "AERRO Pro",
    type: "bike" as const,
    blurb: "Flagship engineering for the long road.",
  },
] as const;

export const INDIA_FEATURES = [
  {
    title: "Made in India",
    description:
      "Designed, engineered, and assembled for Indian roads, climates, and cities.",
  },
  {
    title: "Extended Range",
    description:
      "Battery architecture tuned for real-world distance without range anxiety.",
  },
  {
    title: "Fast Charging",
    description:
      "Rapid replenishment systems that keep you moving through the day.",
  },
  {
    title: "Smart Connectivity",
    description:
      "Connected intelligence for diagnostics, navigation, and fleet readiness.",
  },
  {
    title: "Sustainable Engineering",
    description:
      "Materials and manufacturing chosen for longevity and lower impact.",
  },
] as const;

/** Launch countdown target — adjust as launch date firms up */
export const LAUNCH_DATE = new Date("2026-12-15T00:00:00+05:30");
