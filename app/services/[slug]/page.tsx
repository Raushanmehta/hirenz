import { notFound } from "next/navigation";
import PageTopSection from "@/components/common/PageTopSection";
import ExpertiesSection from "@/sections/home/ExpertiesSection";
import ServiceDetailSection from "@/sections/ServiceDetailSection";
import { site } from "@/data";

interface ServiceDetailRouteProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export function generateStaticParams() {
  const services = site.service?.servicesList || [];
  const slugs = new Set<string>();
  services.forEach((s: any) => {
    if (s.id) slugs.add(s.id);
    const hrefSlug = s.href?.replace("/services/", "").replace(/^\//, "");
    if (hrefSlug) slugs.add(hrefSlug);
  });
  return Array.from(slugs).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailRouteProps) {
  const { slug } = await params;
  const serviceData = site.service;

  const matchedService = serviceData?.servicesList?.find(
    (s: any) =>
      s.id === slug ||
      (s as any).slug === slug ||
      s.href === `/services/${slug}` ||
      s.href?.endsWith(`/${slug}`)
  );

  if (!matchedService) {
    notFound();
  }

  return (
    <main>
      <PageTopSection
        title={matchedService.title || "Solution Detail"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/services" },
          { label: matchedService.title || "Solution Detail" },
        ]}
      />
      <ServiceDetailSection slug={slug} data={matchedService} />
      <ExpertiesSection />
    </main>
  );
}