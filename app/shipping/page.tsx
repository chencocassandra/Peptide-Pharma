import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Shipping Policy" };

export default function ShippingPage() {
  return (
    <LegalPage title="Shipping Policy" updated="September 2026">
      <section>
        <h2>Processing</h2>
        <p>
          Confirmed research-supply orders are typically packed within 1–3
          business days. Public holidays, high volume, and items waiting on
          documentation can extend that window.
        </p>
      </section>
      <section>
        <h2>Dispatch</h2>
        <p>
          This catalogue currently ships Australia-wide. Confirmed research
          orders include complimentary express dispatch within Australia, with
          no spend minimum. We do not offer live carrier choice at checkout.
          Tracking is sent when the courier provides it. Any date quoted is an
          estimate, not a guarantee.
        </p>
      </section>
      <section>
        <h2>Addresses</h2>
        <p>
          You are responsible for a complete, accurate delivery address. We are
          not responsible for delay or loss caused by an address error in the
          enquiry or order.
        </p>
      </section>
      <section>
        <h2>Delays, loss, and damage</h2>
        <p>
          Weather, courier disruption, and peak seasons can delay parcels. If a
          shipment arrives damaged or appears lost, contact us promptly with the
          order details and photographs where possible.
        </p>
      </section>
      <section>
        <h2>Outside Australia</h2>
        <p>
          International dispatch is not the default. If it is agreed for a
          specific order, the recipient is responsible for import rules, duties,
          and any customs inspection.
        </p>
      </section>
    </LegalPage>
  );
}
