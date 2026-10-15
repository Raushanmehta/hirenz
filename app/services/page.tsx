import PageTopSection from "@/components/common/PageTopSection";
import ExpertiesSection from "@/sections/home/ExpertiesSection";
import ServiceSection from "@/sections/home/ServiceSection";
import { site } from "@/data";

// Page metadata
export const metadata = {
  title: "Recruitment Solutions & Services | Hirenz",
  description:
    site.service?.description ||
    "Discover comprehensive HR and recruitment solutions tailored to your organizational growth.",
};

export default function ServicePage() {
  const { service, experties, pageTopSection } = site;

  return (
    <main>
      {/* Page header */}
      <PageTopSection
        data={pageTopSection}
        title="Solutions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions" },
        ]}
      />
      {/* Solutions services list */}
      <ServiceSection data={service} />
      {/* Industry expertise section */}
      <ExpertiesSection data={experties} />
    </main>
  );
}
