import Breadcrumb from "@/components/common/Breadcrumb";
import ExpertiesSection from "@/sections/home/ExpertiesSection";
import ServiceSection from "@/sections/home/ServiceSection";
import { site } from "@/data";



export default function ServicePage() {
  const { service, experties, pageTopSection } = site;

  return (
    <main>
      {/* Page header */}
      <Breadcrumb
        data={pageTopSection}
        title="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services" },
        ]}
      />
      {/* Solutions services list */}
      <ServiceSection data={service} />
      {/* Industry expertise section */}
      <ExpertiesSection data={experties} />
    </main>
  );
}
