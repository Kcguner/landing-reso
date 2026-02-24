import { SectionShell } from "@/components/landing/section-shell";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/lib/content";
import type { FAQItem } from "@/lib/types";

export function FAQ({ items = faqs }: { items?: FAQItem[] }) {
  return (
    <SectionShell id="faq" eyebrow="SSS" title="Sık Sorulan Sorular">
      <Accordion items={items} />
    </SectionShell>
  );
}
