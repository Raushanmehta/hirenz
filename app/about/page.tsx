import PageTopSection from "@/components/common/PageTopSection";
import AboutSection from "@/sections/home/AboutSection";
import ProcessSection from "@/sections/home/ProcessSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import { site } from "@/data";

// Page metadata
export const metadata = {
  title: "About Us | Hirenz Recruitment & HR Consultancy",
  description:
    site.about?.description ||
    "Learn about Hirenz HR consultancy, our story, core values, and expert team.",
};

export default function AboutPage() {
  const { about, process, testimonial, pageTopSection } = site;

  return (
    <main>
      <PageTopSection
        data={pageTopSection}
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutSection data={about} />
      <ProcessSection data={process} />
      <TestimonialSection data={testimonial} />
    </main>
  );
}
