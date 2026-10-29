import { Suspense } from "react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
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

async function ServiceDetailContent({ params }: ServiceDetailRouteProps) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug || "";
  const slug = decodeURIComponent(rawSlug).toLowerCase().trim();
  const serviceData = site.service;

  const matchedService = serviceData?.servicesList?.find(
    (s: any) =>
      s.id?.toLowerCase() === slug ||
      (s as any).slug?.toLowerCase() === slug ||
      s.href === `/services/${rawSlug}` ||
      s.href === `/services/${slug}` ||
      s.href?.endsWith(`/${rawSlug}`) ||
      s.href?.endsWith(`/${slug}`) ||
      s.title?.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!matchedService) {
    notFound();
  }

  const serviceTitle = matchedService.title || "Service Details";

  return (
    <main>
      <Breadcrumb
        title={"Service Details"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/services" },
          { label: "Service Details" },
        ]}
      />
      <ServiceDetailSection slug={slug} data={matchedService} />
      <ExpertiesSection />
    </main>
  );
}

export default function ServiceDetailPage({ params }: ServiceDetailRouteProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-[#a84523] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ServiceDetailContent params={params} />
    </Suspense>
  );
}
