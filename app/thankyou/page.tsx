import Breadcrumb from "@/components/common/Breadcrumb";
import ThankyouSection from "@/sections/ThankyouSection";
import { site } from "@/data";

// Page metadata
export const metadata = {
  title: site.thankyou?.metadata?.title || "Thank You | Hirenz Recruitment & HR Consultancy",
  description:
    site.thankyou?.metadata?.description ||
    "Thank you for contacting Hirenz. We have received your inquiry and our team will get in touch with you shortly.",
};

export default function ThankYouPage() {
  const { thankyou, pageTopSection } = site;

  return (
    <main>
      {/* Page header */}
      <Breadcrumb
        data={pageTopSection}
        title="Thank You"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Thank You" },
        ]}
      />
      {/* Thank you section */}
      <ThankyouSection data={thankyou} />
    </main>
  );
}