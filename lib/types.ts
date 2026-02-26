import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type VibeMode = "zen" | "neutral" | "hype";

export type NavItem = {
  label: string;
  href: string;
};

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type PersonaItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type VibeCardItem = {
  mode: VibeMode;
  title: string;
  subtitle: string;
  useCases: string[];
  venueTypes: string[];
};

export type ShowcaseVariant = "map" | "list" | "auth" | "contribute";

export type ShowcaseItem = {
  title: string;
  subtitle?: string;
  variant: ShowcaseVariant;
};

export type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};
