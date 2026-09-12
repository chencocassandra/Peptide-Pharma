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
          Collaboration, reagent quotes, Certificates of Analysis, and custom
          synthesis all come through this page. The form records your enquiry in
          the browser for this demo and does not send email.
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
            <p className="text-muted-foreground">Dispatch</p>
            <p className="font-medium">Australia-wide</p>
          </li>
          <li>
            <p className="text-muted-foreground">Hours</p>
            <p className="font-medium">Monday–Sunday, 6:00–18:00 AEST</p>
          </li>
          <li>
            <p className="text-muted-foreground">Institute</p>
            <p className="font-medium">215 Innovation Way, Cambridge, MA 02142</p>
          </li>
        </ul>
        <h3 className="mt-8 font-semibold">Orders</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Typical processing is 1–3 business days after payment confirmation.
          Quote requests are usually answered within two business days.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
