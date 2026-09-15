import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { shippingCutoffPlaceholder } from "@/lib/shipping";

export const metadata: Metadata = { title: "Shipping Policy" };

export default function ShippingPage() {
  return (
    <LegalPage title="Shipping Policy" updated="September 2026">
      <section id="express">
        <h2>Free express shipping</h2>
        <p>
          Free express shipping applies to all orders, Australia-wide, with no
          minimum spend.
        </p>
      </section>
      <section id="melbourne-courier">
        <h2>Melbourne same-day or next-day courier</h2>
        <p>
          Same-day or next-day courier delivery is available for an additional
          $20, for addresses within a 40km radius of Melbourne CBD.
        </p>
        <p>
          Availability depends on order time and day. Cutoff times apply:{" "}
          {shippingCutoffPlaceholder}.
        </p>
        <p>
          Courier delivery outside this radius is not available; those orders
          ship via free express post instead.
        </p>
      </section>
      <section>
        <h2>Processing</h2>
        <p>
          Confirmed research-supply orders are typically packed within 1–3
          business days unless a qualifying Melbourne courier slot is selected.
          Public holidays, high volume, and items waiting on documentation can
          extend that window.
        </p>
      </section>
      <section>
        <h2>Tracking and delivery estimates</h2>
        <p>
          Tracking is sent when the carrier provides it. Any date quoted is an
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
