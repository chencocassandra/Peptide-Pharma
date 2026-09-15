import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { shippingCutoffPlaceholder } from "@/lib/shipping";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="September 2026">
      <section>
        <h2>Using this site</h2>
        <p>
          By browsing Peptide Pharma you agree to these terms. If you do not
          agree, leave the site and do not submit an order enquiry.
        </p>
      </section>
      <section>
        <h2>Research use only</h2>
        <p>
          Every catalogue item is a laboratory research chemical. Nothing here is
          a medicine, food, or cosmetic, and nothing is supplied for human or
          veterinary use, diagnosis, or treatment. Buyers confirm they are
          qualified to handle the material in a research setting.
        </p>
      </section>
      <section>
        <h2>Shipping</h2>
        <p>
          Free express shipping applies to all orders, Australia-wide, with no
          minimum spend.
        </p>
        <p>
          Same-day or next-day courier delivery is available for an additional
          $20, for addresses within a 40km radius of Melbourne CBD. Availability
          depends on order time and day. Cutoff times apply:{" "}
          {shippingCutoffPlaceholder}. Courier delivery outside this radius is
          not available; those orders ship via free express post instead.
        </p>
        <p>
          Full shipping rules, tracking, and address terms are on the{" "}
          <a href="/shipping" className="font-medium text-primary underline">
            Shipping Policy
          </a>
          .
        </p>
      </section>
      <section>
        <h2>Orders</h2>
        <p>
          Listings can change without notice. We may decline or cancel an enquiry
          or order, including where stock, documentation, or intended use cannot
          be confirmed. Processing starts after payment instructions are agreed
          in writing.
        </p>
      </section>
      <section>
        <h2>Site content</h2>
        <p>
          Text, photographs, labels, and layout on this site belong to Peptide
          Pharma unless noted otherwise. Do not copy them for another storefront
          without permission.
        </p>
      </section>
      <section>
        <h2>Liability</h2>
        <p>
          To the extent Australian law allows, Peptide Pharma is not liable for
          indirect or consequential loss arising from use of the website or from
          research materials once they leave our control. Nothing in these terms
          limits rights that cannot be excluded.
        </p>
      </section>
      <section>
        <h2>Updates</h2>
        <p>
          We may revise this page from time to time. Continued use after a change
          is posted means you accept the updated terms.
        </p>
      </section>
    </LegalPage>
  );
}
