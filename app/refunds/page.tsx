import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Refund Policy" };

export default function RefundsPage() {
  return (
    <LegalPage title="Refund Policy" updated="September 2026">
      <section>
        <h2>When we review a refund</h2>
        <p>
          Write to us if a parcel arrives damaged, the SKU does not match the
          confirmation, or fulfilment clearly failed. Include the order
          reference and photos of the packaging and contents.
        </p>
      </section>
      <section>
        <h2>Opened research materials</h2>
        <p>
          Opened, reconstituted, or poorly stored vials are generally not
          returned, except where Australian consumer law requires another
          outcome.
        </p>
      </section>
      <section>
        <h2>Approved refunds</h2>
        <p>
          If we approve a refund, it is returned by the original payment method
          where we can. Bank or processor timing is outside our control.
          Courier fees are refunded only when the law or a packing error
          requires it.
        </p>
      </section>
    </LegalPage>
  );
}
