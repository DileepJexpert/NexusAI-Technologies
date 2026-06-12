import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pageUrl = `${brand.siteUrl}/gst-guides`;

const keywords = [
  "GST guide for small business",
  "GST registration India",
  "GSTR-1 filing guide",
  "GSTR-3B filing guide",
  "HSN code guide India",
  "input tax credit guide",
  "e-invoicing India",
  "e-way bill rules",
  "GST for MSME",
  "GST compliance India",
  "composition scheme GST",
  "ITC reversal rules",
];

export const metadata: Metadata = {
  title: "GST Guides for Indian Small Businesses & MSMEs",
  description:
    "Free GST guides for Indian MSMEs and small businesses. Learn about GST registration, GSTR-1, GSTR-3B filing, HSN codes, input tax credit, e-invoicing and e-way bills.",
  keywords,
  alternates: {
    canonical: "/gst-guides",
  },
  openGraph: {
    title: "GST Guides for Indian Small Businesses & MSMEs",
    description:
      "Simplified GST compliance guides covering registration, returns filing, HSN codes, ITC and e-invoicing for Indian businesses.",
    url: pageUrl,
  },
};

const guides = [
  {
    id: "understanding-gst",
    icon: "📋",
    title: "Understanding GST for Small Businesses",
    description:
      "A foundational guide to the Goods and Services Tax — who needs to register, which type of GST applies, and how the composition scheme works.",
    topics: [
      "What is GST and why it matters",
      "Registration thresholds",
      "CGST, SGST and IGST explained",
      "Composition scheme eligibility",
      "When voluntary registration makes sense",
    ],
    content: (
      <>
        <p>
          The Goods and Services Tax (GST) is India&apos;s unified indirect tax
          that replaced a patchwork of central and state levies — including
          excise duty, VAT, service tax, and entry tax — on 1 July 2017. For
          small businesses and MSMEs, GST simplified compliance by merging
          multiple tax filings into a single framework, but it also introduced
          new responsibilities around invoicing, return filing, and input tax
          credit reconciliation.
        </p>
        <p>
          Every business whose aggregate turnover exceeds the prescribed
          threshold must register for GST. For businesses that supply goods, the
          threshold is <strong>Rs 40 lakh</strong> in most states (Rs 20 lakh in
          special category states like the north-eastern states, Himachal
          Pradesh, and Uttarakhand). For service providers, the threshold is{" "}
          <strong>Rs 20 lakh</strong> across all states (Rs 10 lakh in special
          category states). Certain businesses — such as those making
          inter-state supplies, e-commerce operators, and casual taxable persons
          — must register regardless of turnover.
        </p>
        <p>
          GST in India has three components. <strong>CGST</strong> (Central GST)
          is collected by the central government on intra-state supplies.{" "}
          <strong>SGST</strong> (State GST) is collected by the state government
          on the same intra-state supplies. <strong>IGST</strong> (Integrated
          GST) is collected by the central government on inter-state supplies
          and imports. For example, if a trader in Maharashtra sells goods to a
          buyer also in Maharashtra, the invoice shows CGST and SGST. If the
          same trader sells to a buyer in Karnataka, the invoice shows IGST
          instead.
        </p>
        <p>
          The <strong>Composition Scheme</strong> under Section 10 of the CGST
          Act is a simplified compliance option for small taxpayers. Businesses
          with an aggregate turnover of up to Rs 1.5 crore (Rs 75 lakh in
          special category states) can opt in. Composition dealers pay tax at a
          flat rate — 1% for manufacturers, 1% for traders, and 5% for
          restaurants — and file quarterly returns instead of monthly. However,
          they cannot collect tax from customers, cannot claim input tax credit,
          and cannot make inter-state outward supplies. The scheme is well-suited
          for businesses that sell primarily to end consumers within the same
          state.
        </p>
        <p>
          Even if a business falls below the registration threshold, voluntary
          registration can be beneficial. It enables you to collect GST on
          invoices, claim ITC on purchases, and participate in B2B transactions
          where buyers require a tax invoice. Many businesses also register
          voluntarily to sell on e-commerce platforms, which mandate GST
          registration regardless of turnover.
        </p>

        <div className="mt-6 rounded-lg border-l-4 border-primary bg-primary/5 p-5">
          <h4 className="font-bold">Key Points</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>
              Goods suppliers: Register at Rs 40 lakh turnover (Rs 20 lakh in
              special category states)
            </li>
            <li>
              Service providers: Register at Rs 20 lakh turnover (Rs 10 lakh in
              special category states)
            </li>
            <li>
              Composition scheme: Available up to Rs 1.5 crore — lower rates,
              quarterly filing, no ITC
            </li>
            <li>
              Inter-state supply, e-commerce sellers, and casual taxable persons
              must register regardless of turnover
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-accent/5 p-5">
          <p className="text-sm">
            <strong>How {brand.name} helps:</strong> {brand.name} automatically
            determines the correct GST type (CGST+SGST or IGST) based on your
            business location and your customer&apos;s state. The system tracks
            your aggregate turnover and alerts you when you approach the
            registration threshold, so you never miss a compliance deadline.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "gstr-1-filing",
    icon: "📤",
    title: "How to File GSTR-1 (Sales Return)",
    description:
      "Step-by-step guidance on filing your outward supplies return — due dates, invoice categories, HSN summary, and common filing mistakes.",
    topics: [
      "What GSTR-1 covers",
      "Monthly vs quarterly due dates",
      "B2B vs B2C invoice reporting",
      "HSN summary requirements",
      "Amendments and common mistakes",
    ],
    content: (
      <>
        <p>
          GSTR-1 is the return in which every registered taxpayer reports
          details of outward supplies — that is, all sales made during a
          particular tax period. This includes B2B invoices, B2C invoices, credit
          notes, debit notes, exports, and advances received. GSTR-1 does not
          involve any tax payment; it is a declaration of sales data that feeds
          into your buyer&apos;s GSTR-2A and GSTR-2B for input tax credit
          matching.
        </p>
        <p>
          The due date for GSTR-1 depends on whether you file monthly or
          quarterly. <strong>Monthly filers</strong> must submit GSTR-1 by the{" "}
          <strong>11th of the following month</strong> — for example, GSTR-1 for
          June is due by 11 July. <strong>Quarterly filers</strong> under the
          QRMP (Quarterly Return Filing and Monthly Payment) scheme file GSTR-1
          by the 13th of the month following the quarter. Businesses with
          aggregate turnover up to Rs 5 crore can opt for the QRMP scheme.
          Quarterly filers can still upload invoices monthly using the Invoice
          Furnishing Facility (IFF) for B2B invoices up to Rs 50 lakh per month.
        </p>
        <p>
          GSTR-1 requires you to categorize invoices. <strong>B2B invoices</strong>{" "}
          (sales to registered businesses) must be reported with the buyer&apos;s
          GSTIN, invoice number, date, taxable value, and tax amounts — these
          flow into your buyer&apos;s GSTR-2A. <strong>B2C large</strong>{" "}
          invoices (inter-state sales to unregistered persons exceeding Rs 2.5
          lakh) require state-wise reporting. <strong>B2C small</strong>{" "}
          (remaining B2C sales) are reported as consolidated state-wise summaries.
          You must also report credit notes, debit notes, export invoices, and
          advances received or adjusted.
        </p>
        <p>
          The <strong>HSN summary</strong> section requires you to report the
          total value of outward supplies grouped by HSN code. The level of
          detail depends on your turnover: businesses with turnover up to Rs 5
          crore report at 4-digit HSN level, while those above Rs 5 crore report
          at 6-digit level. This summary helps the government track
          commodity-wise tax collection and is used for reconciliation.
        </p>
        <p>
          If you discover errors in a previously filed GSTR-1, you can file
          amendments in the GSTR-1 of a subsequent period. Common mistakes
          include entering the wrong GSTIN for a buyer (causing ITC mismatch for
          the recipient), incorrect place of supply (leading to wrong CGST/SGST
          vs IGST split), duplicate invoice entries, and missing credit notes.
          Late filing attracts a penalty of Rs 50 per day (Rs 20 per day for nil
          returns), capped at Rs 10,000 per return period.
        </p>

        <div className="mt-6 rounded-lg border-l-4 border-primary bg-primary/5 p-5">
          <h4 className="font-bold">Key Points</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>Monthly filers: Due by 11th of the next month</li>
            <li>
              Quarterly (QRMP) filers: Due by 13th of the month after the
              quarter
            </li>
            <li>B2B invoices must include buyer GSTIN for ITC matching</li>
            <li>
              HSN summary: 4-digit for turnover up to Rs 5 Cr, 6-digit above
            </li>
            <li>
              Late filing penalty: Rs 50/day (Rs 20/day for nil), max Rs 10,000
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-accent/5 p-5">
          <p className="text-sm">
            <strong>How {brand.name} helps:</strong> {brand.name} automatically
            categorizes your invoices into B2B, B2C large, and B2C small
            sections based on buyer details and invoice value. The GSTR-1 review
            center flags missing GSTINs, incorrect place of supply, and HSN
            mismatches before you file — so you catch errors before they become
            ITC disputes with your buyers.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "gstr-3b-filing",
    icon: "📊",
    title: "How to File GSTR-3B (Summary Return)",
    description:
      "Understand the monthly summary return for GST — tax liability calculation, ITC claims, due dates, and interest on late payment.",
    topics: [
      "What GSTR-3B covers",
      "Monthly due dates and staggered schedule",
      "Output tax and ITC calculation",
      "Interest on late filing",
      "Auto-populated data from GSTR-1 and GSTR-2B",
    ],
    content: (
      <>
        <p>
          GSTR-3B is a monthly self-declared summary return where taxpayers
          report their total output tax liability, claim input tax credit, and
          pay the net tax due. Unlike GSTR-1 which only reports sales details,
          GSTR-3B is where actual tax payment happens. It was introduced as a
          simplified interim return when GST launched, but it has continued as
          the primary payment return.
        </p>
        <p>
          The standard due date for GSTR-3B is the{" "}
          <strong>20th of the following month</strong>. However, the government
          has implemented a staggered filing schedule based on your state and
          turnover to reduce server load. Taxpayers with turnover above Rs 5
          crore in the previous financial year must file by the 20th. Those with
          turnover up to Rs 5 crore file by the 22nd or 24th depending on their
          state — states in Category A (like Chhattisgarh, Madhya Pradesh,
          Gujarat, Maharashtra, etc.) file by the 22nd, while Category B states
          file by the 24th. Under the QRMP scheme, quarterly filers submit
          GSTR-3B by the 22nd or 24th of the month after the quarter.
        </p>
        <p>
          The return is divided into several tables. Table 3.1 covers outward
          supplies and tax liability — your total taxable sales, exempt sales,
          and non-GST supplies. Table 4 is for eligible input tax credit —
          broken into ITC from domestic purchases, imports, and ITC that needs
          to be reversed. Table 5 covers exempt, nil-rated, and non-GST inward
          supplies. Table 6 is the payment of tax section where you see the net
          tax payable after adjusting ITC against output liability.
        </p>
        <p>
          Since August 2020, GSTR-3B comes partly auto-populated from your
          GSTR-1 (for output liability) and GSTR-2B (for input tax credit).
          GSTR-2B is a static statement generated on the 14th of each month,
          showing all the invoices uploaded by your suppliers in their GSTR-1.
          You should reconcile your purchase records with GSTR-2B data before
          filing GSTR-3B to ensure you are claiming only eligible ITC.
          Over-claiming ITC can lead to notices and interest charges.
        </p>
        <p>
          If GSTR-3B is filed late, interest is charged at{" "}
          <strong>18% per annum</strong> on the net tax liability (tax payable
          after adjusting ITC) from the due date until the date of payment. If
          you have excess ITC and the net liability is nil, no interest is
          charged. A late fee of Rs 50 per day (Rs 20 per day for nil returns)
          is also applicable, subject to a maximum based on the return period.
          Consistent late filing can also result in your GSTIN being flagged or
          suspended.
        </p>

        <div className="mt-6 rounded-lg border-l-4 border-primary bg-primary/5 p-5">
          <h4 className="font-bold">Key Points</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>
              Due date: 20th of the following month (22nd/24th based on state
              for smaller businesses)
            </li>
            <li>
              GSTR-3B is where you actually pay tax — not just report sales
            </li>
            <li>
              Auto-populated from GSTR-1 (output) and GSTR-2B (input credit)
            </li>
            <li>
              Interest on late payment: 18% per annum on net tax liability
            </li>
            <li>
              Always reconcile with GSTR-2B before claiming ITC in GSTR-3B
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-accent/5 p-5">
          <p className="text-sm">
            <strong>How {brand.name} helps:</strong> {brand.name} computes your
            output tax liability and eligible ITC automatically from your sales
            and purchase records. The system reconciles your books with GSTR-2B
            data, highlights mismatches, and shows you the exact net tax payable
            — so you can file GSTR-3B with confidence and avoid interest
            charges.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "hsn-codes",
    icon: "🏷️",
    title: "HSN Codes Explained",
    description:
      "Learn how HSN codes classify goods for GST, the digit requirements based on turnover, and how to find the correct code for your products.",
    topics: [
      "What HSN codes are and why they matter",
      "2, 4, 6 and 8-digit structure",
      "Turnover-based reporting requirements",
      "SAC codes for services",
      "Finding the right HSN code",
    ],
    content: (
      <>
        <p>
          HSN stands for Harmonized System of Nomenclature — a globally
          standardized system developed by the World Customs Organization (WCO)
          to classify traded goods. In India, the GST framework uses HSN codes
          to identify goods and determine the applicable tax rate. Every product
          listed on a GST invoice must carry an HSN code. For services, the
          equivalent is the SAC (Services Accounting Code), which follows a
          similar structure but starts with the digits 99.
        </p>
        <p>
          HSN codes follow a hierarchical structure. At the broadest level,{" "}
          <strong>2-digit codes</strong> represent chapters (for example, 01 for
          live animals, 10 for cereals). <strong>4-digit codes</strong>{" "}
          represent headings within chapters (1006 for rice). <strong>
            6-digit codes
          </strong>{" "}
          represent sub-headings (100630 for semi-milled or wholly milled rice).
          India has added <strong>8-digit codes</strong> for more granular
          classification (10063020 for Basmati rice). The more digits you use,
          the more specific the classification — and for certain products, the
          exact 8-digit code determines the GST rate.
        </p>
        <p>
          Under GST, the number of HSN digits you must report depends on your
          aggregate turnover. Businesses with turnover{" "}
          <strong>up to Rs 5 crore</strong> must mention{" "}
          <strong>4-digit HSN codes</strong> on invoices and in GSTR-1.
          Businesses with turnover <strong>above Rs 5 crore</strong> must use{" "}
          <strong>6-digit HSN codes</strong>. For exports and imports, 8-digit
          codes are mandatory. The CBIC has made HSN reporting increasingly
          important — incorrect or missing HSN codes can lead to e-invoice
          rejection, GSTR-1 filing errors, and ITC mismatches.
        </p>
        <p>
          Finding the right HSN code requires understanding your product
          precisely. The GST portal provides an HSN search tool where you can
          search by keyword or browse the chapter structure. You should also
          refer to the Customs Tariff Act schedules, which form the basis for
          HSN classification. When in doubt, look at how similar products are
          classified in your industry, check with your supplier&apos;s invoices, or
          consult the Advance Ruling Authority for a binding classification
          decision.
        </p>
        <p>
          Common mistakes include using an overly generic HSN code that does not
          match the applicable GST rate, using the wrong number of digits for
          your turnover bracket, and inconsistently coding the same product
          across different invoices. These errors can cause problems during GST
          audits and reconciliation, as the tax department uses HSN data to
          cross-verify turnover declarations.
        </p>

        <div className="mt-6 rounded-lg border-l-4 border-primary bg-primary/5 p-5">
          <h4 className="font-bold">Key Points</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>
              Turnover up to Rs 5 crore: 4-digit HSN codes on invoices and
              GSTR-1
            </li>
            <li>Turnover above Rs 5 crore: 6-digit HSN codes required</li>
            <li>Exports and imports: 8-digit HSN codes mandatory</li>
            <li>
              SAC codes (starting with 99) are used for services instead of HSN
            </li>
            <li>
              Incorrect HSN codes can cause e-invoice rejection and ITC
              mismatches
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-accent/5 p-5">
          <p className="text-sm">
            <strong>How {brand.name} helps:</strong> {brand.name} maintains an
            updated HSN and SAC code database. When you create items in your
            inventory, the system suggests the most appropriate HSN code and
            validates it against the applicable GST rate. The GSTR-1 review
            centre flags HSN mismatches before filing, preventing errors that
            could trigger notices.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "input-tax-credit",
    icon: "💰",
    title: "Input Tax Credit (ITC) Guide",
    description:
      "Everything MSMEs need to know about claiming ITC — eligibility conditions, blocked credits under Section 17(5), reversal rules, and GSTR-2A/2B reconciliation.",
    topics: [
      "What ITC is and how it works",
      "Four conditions for claiming ITC",
      "Blocked credits under Section 17(5)",
      "ITC reversal rules",
      "Reconciliation with GSTR-2A and GSTR-2B",
    ],
    content: (
      <>
        <p>
          Input Tax Credit is the mechanism that prevents cascading taxation
          under GST. When you purchase goods or services for your business, the
          GST paid on those purchases can be set off against the GST you collect
          on your sales. You only pay the net difference to the government. For
          example, if you collect Rs 18,000 as GST on sales and pay Rs 12,000
          as GST on purchases, your net liability is Rs 6,000. ITC is what
          makes GST a true value-added tax rather than a turnover tax.
        </p>
        <p>
          To claim ITC, four conditions must be satisfied simultaneously. First,
          you must possess a <strong>valid tax invoice</strong> or debit note
          from the supplier. Second, you must have{" "}
          <strong>received the goods or services</strong>. Third, the{" "}
          <strong>supplier must have paid the tax</strong> to the government —
          specifically, the invoice must reflect in your GSTR-2B. Fourth, you
          must have <strong>filed your own GSTR-3B</strong> for the relevant
          period. If any of these conditions is not met, the ITC claim is
          invalid and may be reversed with interest.
        </p>
        <p>
          Section 17(5) of the CGST Act lists <strong>blocked credits</strong>{" "}
          — purchases for which ITC cannot be claimed regardless of business
          use. These include motor vehicles and conveyances (with exceptions
          for specific businesses), food and beverages, outdoor catering,
          beauty treatment, health services, club memberships, rent-a-cab
          services, life and health insurance (unless mandated by law or
          provided to employees), travel benefits for employees on leave or home
          travel, and goods or services used for constructing immovable property
          on own account. Understanding blocked credits is critical — claiming
          ITC on blocked items can lead to demand notices, interest at 18%, and
          penalties.
        </p>
        <p>
          ITC must be <strong>reversed</strong> in certain situations. If goods
          are lost, stolen, destroyed, or written off, the ITC already claimed
          must be reversed. If inputs are used partly for business and partly
          for personal purposes, or partly for taxable and partly for exempt
          supplies, proportionate ITC must be reversed under Rules 42 and 43.
          ITC must also be reversed if you do not pay your supplier within 180
          days of the invoice date — this is a commonly overlooked requirement
          that catches many businesses during audits.
        </p>
        <p>
          Reconciliation with <strong>GSTR-2A</strong> and{" "}
          <strong>GSTR-2B</strong> is now essential for ITC claims. GSTR-2A is
          a dynamic statement that changes as suppliers upload or amend their
          invoices. GSTR-2B, generated on the 14th of each month, is a static
          statement that determines ITC eligibility for that period. Under Rule
          36(4), ITC claimed in GSTR-3B cannot exceed the ITC available in
          GSTR-2B by more than 5% — effectively meaning you can only claim ITC
          on invoices that your suppliers have reported. Regular reconciliation
          between your purchase records and GSTR-2B is necessary to avoid
          over-claiming.
        </p>
        <p>
          For businesses with multiple GST registrations (different states),
          cross-utilization of ITC follows a specific order. IGST credit must be
          used first against IGST liability, then against CGST, then SGST.
          CGST credit can be used against CGST and IGST but not SGST. SGST
          credit can be used against SGST and IGST but not CGST. Getting this
          sequence right ensures you do not end up with unnecessary cash
          outflows.
        </p>

        <div className="mt-6 rounded-lg border-l-4 border-primary bg-primary/5 p-5">
          <h4 className="font-bold">Key Points</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>
              Four conditions: valid invoice, goods received, supplier paid tax,
              GSTR-3B filed
            </li>
            <li>
              ITC must be reversed if supplier is not paid within 180 days
            </li>
            <li>
              ITC claim cannot exceed GSTR-2B amount by more than 5% (Rule
              36(4))
            </li>
            <li>
              Blocked credits under Section 17(5): motor vehicles, food,
              construction, personal expenses
            </li>
            <li>
              Cross-utilization order: IGST first, then CGST/SGST against
              matching liabilities
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-accent/5 p-5">
          <p className="text-sm">
            <strong>How {brand.name} helps:</strong> {brand.name} automatically
            reconciles your purchase records against GSTR-2B data, showing you
            exactly which invoices are matched, which are missing from the
            supplier&apos;s filing, and which have value mismatches. The system
            flags blocked credit items and tracks the 180-day payment rule, so
            you claim the maximum legitimate ITC without risking reversals.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "e-invoicing-e-way-bill",
    icon: "🧾",
    title: "E-Invoicing & E-Way Bill",
    description:
      "Understand India's e-invoicing mandate, IRN generation, e-way bill requirements for goods movement, validity periods, and penalties for non-compliance.",
    topics: [
      "E-invoicing threshold and applicability",
      "How IRN generation works",
      "E-way bill rules and Rs 50,000 threshold",
      "Validity periods for e-way bills",
      "Penalties for non-compliance",
    ],
    content: (
      <>
        <p>
          E-invoicing is the electronic authentication of B2B invoices through
          the government&apos;s Invoice Registration Portal (IRP). When you
          generate a B2B invoice, you submit its details to the IRP, which
          validates the data, generates a unique <strong>Invoice Registration
          Number (IRN)</strong>, digitally signs the invoice, and returns a QR
          code. The e-invoice is then auto-populated into your GSTR-1 and your
          buyer&apos;s GSTR-2A, eliminating manual data entry and reducing
          reconciliation mismatches.
        </p>
        <p>
          The e-invoicing mandate has been progressively extended to cover
          smaller businesses. As of August 2023, e-invoicing is mandatory for
          all businesses with aggregate turnover exceeding{" "}
          <strong>Rs 5 crore</strong> in any financial year from 2017-18
          onwards. This means most mid-sized businesses — including many MSMEs
          — now fall under the e-invoicing requirement. E-invoicing applies to
          B2B invoices, B2B credit notes, B2B debit notes, and export invoices.
          It does not apply to B2C invoices, import bills, or supplies by SEZ
          units.
        </p>
        <p>
          The process works as follows: your billing software generates the
          invoice JSON in the prescribed schema, pushes it to one of the
          registered IRPs (NIC, Cygnet, IRIS, or others), receives back the
          signed JSON with IRN and QR code, and then prints or shares the
          invoice with the QR code embedded. The IRN is valid for 24 hours for
          cancellation — after that, you can only issue a credit note against
          it. If you generate an invoice without an IRN when you are required to,
          it is not considered a valid invoice under GST, and the recipient
          cannot claim ITC on it.
        </p>
        <p>
          <strong>E-way bills</strong> are electronic documents required for the
          movement of goods exceeding <strong>Rs 50,000</strong> in value.
          Before goods are transported — whether by road, rail, air, or ship —
          the consignor or consignee must generate an e-way bill on the e-way
          bill portal. The e-way bill contains details of the goods, the
          consignor, the consignee, and the transporter. Both the supplier and
          the transporter must carry a copy during transit. E-way bills are also
          required for stock transfers, branch transfers, and goods sent for job
          work if the value exceeds Rs 50,000.
        </p>
        <p>
          E-way bill <strong>validity</strong> is based on the distance of
          transportation. For regular vehicles (other than over-dimensional
          cargo), the validity is 1 day for every 200 km or part thereof. For
          over-dimensional cargo, it is 1 day for every 20 km. If the goods
          cannot be transported within the validity period, the transporter can
          extend the e-way bill before it expires by updating the reason for
          delay. Once an e-way bill expires, a new one must be generated.
        </p>
        <p>
          <strong>Penalties</strong> for non-compliance are significant. Moving
          goods without a valid e-way bill can result in detention of goods and
          the vehicle, along with a penalty equal to the tax payable on the
          goods or Rs 10,000, whichever is higher. For e-invoicing, failure to
          generate an IRN attracts a penalty of Rs 10,000 or 100% of the tax
          due, whichever is higher. The recipient also loses ITC eligibility on
          invoices without a valid IRN. Given these consequences, automation of
          e-invoicing and e-way bill generation is critical for compliance.
        </p>

        <div className="mt-6 rounded-lg border-l-4 border-primary bg-primary/5 p-5">
          <h4 className="font-bold">Key Points</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>
              E-invoicing: Mandatory for turnover above Rs 5 crore (from August
              2023)
            </li>
            <li>
              IRN must be generated for all B2B invoices, credit/debit notes,
              and export invoices
            </li>
            <li>
              E-way bill: Required for goods movement exceeding Rs 50,000
            </li>
            <li>
              E-way bill validity: 1 day per 200 km (regular), 1 day per 20 km
              (over-dimensional)
            </li>
            <li>
              Penalty for missing e-invoice: Rs 10,000 or 100% of tax due,
              whichever is higher
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-accent/5 p-5">
          <p className="text-sm">
            <strong>How {brand.name} helps:</strong> {brand.name} integrates
            with registered IRPs to generate e-invoices directly from your
            billing workflow — no manual JSON uploads or portal visits. For
            e-way bills, the system auto-generates them when invoice value
            exceeds Rs 50,000, calculates validity based on distance, and alerts
            you before expiry so you can extend in time.
          </p>
        </div>
      </>
    ),
  },
];

export default function GSTGuidesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#page`,
    name: "GST Guides for Indian Small Businesses & MSMEs",
    description: metadata.description,
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      name: brand.name,
      url: brand.siteUrl,
    },
    mainEntity: guides.map((guide) => ({
      "@type": "Article",
      name: guide.title,
      description: guide.description,
      author: {
        "@type": "Organization",
        name: brand.name,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            GST Guides for Indian Businesses
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            Simplified GST compliance guides for MSMEs and small businesses.
            Understand registration, returns filing, ITC, HSN codes, and
            e-invoicing — written in plain language for business owners, not
            chartered accountants.
          </p>
        </div>
      </section>

      {/* Guide Cards Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2">
            {guides.map((guide) => (
              <a
                key={guide.id}
                href={`#${guide.id}`}
                className="group rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-3xl">{guide.icon}</div>
                <h2 className="mt-3 font-heading text-xl font-bold group-hover:text-primary">
                  {guide.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {guide.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {guide.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Guide Sections */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide max-w-4xl">
          <Accordion type="multiple" className="space-y-6">
            {guides.map((guide) => (
              <AccordionItem
                key={guide.id}
                value={guide.id}
                id={guide.id}
                className="scroll-mt-24 rounded-2xl border bg-card px-6 shadow-sm"
              >
                <AccordionTrigger className="py-6 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{guide.icon}</span>
                    <span className="font-heading text-xl font-bold">
                      {guide.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="prose prose-slate max-w-none pb-6 text-base leading-7 text-muted-foreground">
                  {guide.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-16 text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Simplify your GST compliance with {brand.name}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Stop worrying about missed deadlines, ITC mismatches, and filing
            errors. {brand.name} automates GST calculations, reconciliation,
            and return preparation — so you can focus on growing your business.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="accent" size="lg" asChild>
              <Link href="/contact">
                Get started with {brand.name}{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
