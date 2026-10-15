import PageTopSection from "@/components/common/PageTopSection";
import JobSection from "@/sections/JobSection";
import { site } from "@/data";

// Page metadata
export const metadata = {
  title: "Career Opportunities | Hirenz Jobs",
  description:
    site.jobs?.description ||
    "Explore career opportunities and job openings at Hirenz. Join our high-performing team.",
};

export default function JobsPage() {
  const { jobs, pageTopSection } = site;

  return (
    <main>
      {/* Page header */}
      <PageTopSection
        data={pageTopSection}
        title="Jobs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Jobs" },
        ]}
      />
      {/* Careers list section */}
      <JobSection data={jobs} />
    </main>
  );
}
