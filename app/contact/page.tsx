import Breadcrumb from "@/components/common/Breadcrumb";
import ContactSection from "@/sections/ContactSection";
import { site } from "@/data";

// Page metadata
export const metadata = {
  title: "Contact Us | Hirenz Recruitment & HR Consultancy",
  description:
    site.contact?.description ||
    "Get in touch with Hirenz. Our talent consultants are ready to assist with your hiring needs.",
};

export default function ContactPage() {
  const { contact, pageTopSection } = site;

  return (
    <main>
      {/* Page header */}
      <Breadcrumb
        data={pageTopSection}
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />
      <ContactSection data={contact} />
    </main>
  );
}
