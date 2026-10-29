import Breadcrumb from "@/components/common/Breadcrumb";
import ApplyNowSection from "@/sections/ApplyNowSection";
import { site } from "@/data";

// Page metadata
export const metadata = {
  title: "Apply Now | Hirenz Career Application",
  description:
    site.applyNow?.description ||
    "Submit your job application and resume to Hirenz talent acquisition team.",
};

export default function ApplyNowPage() {
  const { applyNow, pageTopSection } = site;

  return (
    <main>
      <Breadcrumb
        data={pageTopSection}
        title="Apply Now"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Apply Now" },
        ]}
      />
      <ApplyNowSection data={applyNow} />
    </main>
  );
}
