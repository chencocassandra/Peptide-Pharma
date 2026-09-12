import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2">
      <div>
        <Eyebrow>Get in touch</Eyebrow>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Start a conversation
        </h1>
        <p className="mt-5 max-w-md text-muted-foreground leading-relaxed">
          Whether you are exploring a collaboration, ordering reagents, or
          commissioning a custom synthesis, our team is ready to help.
        </p>
        <h2 className="mt-10 text-lg font-semibold">Contact details</h2>
        <ul className="mt-4 space-y-4 text-sm">
          <li>
            <p className="text-muted-foreground">Email</p>
            <a className="font-medium hover:underline" href="mailto:research@peptidepharma.com">
              research@peptidepharma.com
            </a>
          </li>
          <li>
            <p className="text-muted-foreground">Phone</p>
            <a className="font-medium hover:underline" href="tel:+16175550142">
              +1 (617) 555-0142
            </a>
          </li>
          <li>
            <p className="text-muted-foreground">Institute</p>
            <p className="font-medium">215 Innovation Way, Cambridge, MA 02142</p>
          </li>
        </ul>
        <h3 className="mt-8 font-semibold">Office hours</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Monday – Friday, 9:00 – 17:00 ET. Reagent and quote requests are
          typically answered within two business days.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
