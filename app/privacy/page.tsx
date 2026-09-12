import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="September 2026">
      <section>
        <h2>Introduction</h2>
        <p>
          Peptide Pharma collects only what we need to answer enquiries, fulfil
          research-supply orders, and keep this site working. This page describes
          that practice in plain language.
        </p>
      </section>
      <section>
        <h2>Information we collect</h2>
        <p>
          If you write to us or place an enquiry, we may hold your name, email,
          organisation, delivery details, and the content of the message. The
          site may also record technical logs such as browser type and pages
          viewed.
        </p>
      </section>
      <section>
        <h2>How we use it</h2>
        <p>
          We use this information to process quotes and orders, send catalogue
          notices you asked for, improve the storefront, and protect the service
          from abuse.
        </p>
      </section>
      <section>
        <h2>Security and cookies</h2>
        <p>
          Access to enquiry records is limited to staff who need it. Session or
          analytics cookies may be used so the cart and pages load reliably. You
          can block cookies in your browser; the cart may then reset between
          visits.
        </p>
      </section>
      <section>
        <h2>Your rights</h2>
        <p>
          You may ask for a copy of the personal information we hold, or request
          a correction or deletion, as allowed by Australian privacy law. Email
          research@peptidepharma.com.
        </p>
      </section>
    </LegalPage>
  );
}
