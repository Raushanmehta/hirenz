"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { site, ServiceItem } from "@/data";
import { ChevronRightIcon } from "@/components/icons";
import NeedHelpCard from "@/components/cards/NeedHelpCard";
import {
  FadeLeft,
  FadeUp,
  BlurIn,
  StaggerContainer,
  StaggerItem,
} from "@/utils/animation";

export interface ServiceDetailSectionProps {
  slug?: string;
  data?: ServiceItem;
  className?: string;
}

export default function ServiceDetailSection({
  slug,
  data,
  className = "",
}: ServiceDetailSectionProps) {
  const allServices = (site.service?.servicesList || []) as ServiceItem[];
  const needHelpData = (site.service as any)?.needHelp || {
    badge: "LET'S TALK",
    titlePart1: "Connect With",
    highlight: "Our Experts",
    description: "Have questions or need guidance? Our team is here to help you find the right talent solutions.",
    phone: "+1 000000000",
    email: "info@xyz.com",
    downloadText: "Download PDF",
    downloadHref: "/contact",
  };

  const activeServiceData: ServiceItem =
    data ||
    (slug
      ? allServices.find(
          (s) =>
            s.id === slug ||
            (s as any).slug === slug ||
            s.href === `/services/${slug}` ||
            s.href?.endsWith(`/${slug}`)
        )
      : null) ||
    allServices[0] ||
    ({} as ServiceItem);

  const heroImage = (activeServiceData as any).heroImage || "/images/service-detail-main.png";
  const overviewBadge = (activeServiceData as any).overviewBadge || activeServiceData.title;
  const overviewTitle = (activeServiceData as any).overviewTitle || "Service Overview";
  const overviewTitlePart1 = (activeServiceData as any).overviewTitlePart1 || "Service";
  const overviewHighlight = (activeServiceData as any).overviewHighlight || "Overview";
  const overviewParagraphs = (activeServiceData as any).overviewParagraphs || [
    activeServiceData.description ||
      "We provide comprehensive end-to-end solutions customized to match your organization's unique requirements.",
  ];

  const approachBadge = (activeServiceData as any).approachBadge || "OUR APPROACH";
  const approachTitle = (activeServiceData as any).approachTitle || "Structured Delivery Framework";
  const approachTitlePart1 = (activeServiceData as any).approachTitlePart1 || "Structured";
  const approachHighlight = (activeServiceData as any).approachHighlight || "Delivery Framework";
  const approachDescription =
    (activeServiceData as any).approachDescription ||
    "Our structured methodology ensures high precision, transparency, and scalable talent delivery across sectors.";

  const features: Array<{ title: string; description: string; image: string }> =
    (activeServiceData as any).features || [
      {
        title: "Talent Mapping",
        description: "In-depth market intelligence and competitor talent analysis.",
        image: "/images/service-detail-mapping.png",
      },
      {
        title: "Candidate Evaluation",
        description: "Multi-tier behavioral and technical competency assessments.",
        image: "/images/service-detail-evaluation.png",
      },
    ];

  const servicesNavList = (site.service as any)?.servicesNavList || [
    { id: "permanent-recruitment", name: "Permanent Recruitment", href: "/services/permanent-recruitment" },
    { id: "contract-staffing", name: "Contract Staffing", href: "/services/contract-staffing" },
    { id: "executive-search", name: "Executive Search", href: "/services/executive-search" },
    { id: "rpo-solutions", name: "RPO Solutions", href: "/services/rpo-solutions" },
    { id: "hr-consulting", name: "HR Consulting", href: "/services/hr-consulting" },
    { id: "payroll-management", name: "Payroll Management", href: "/services/payroll-management" },
    { id: "talent-mapping", name: "Talent Mapping", href: "/services/talent-mapping" },
    { id: "leadership-hiring", name: "Leadership Hiring", href: "/services/leadership-hiring" },
  ];

  return (
    <section className={`w-full bg-white font-poppins py-8 lg:py-12 ${className}`}>
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
          {/* Sidebar navigation */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24 self-start">
            <FadeLeft delay={0.1}>
              {/* Vertical navigation list */}
              <div className="space-y-2">
                {servicesNavList.map((item: any) => {
                  const isActive =
                    item.id === activeServiceData.id ||
                    item.href === activeServiceData.href ||
                    (slug && (item.id === slug || item.href?.endsWith(`/${slug}`)));

                  return (
                    <Link
                      key={item.id}
                      href={item.href || `/services/${item.id}`}
                      className={`w-full rounded-lg px-4 py-3 sm:py-3.5 flex items-center justify-between font-bold text-[14px] sm:text-[14.5px] transition-all duration-200 text-left ${
                        isActive
                          ? "bg-[#a84523] text-white shadow-[0_6px_20px_rgba(168,69,35,0.22)] scale-[1.01]"
                          : "bg-white text-[#1c1c1c] border border-[#eeeeee] hover:border-[#a84523]/40 hover:bg-gray-50/60 shadow-sm"
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive ? (
                        <span className="w-6 h-6 rounded-full bg-white text-[#a84523] flex items-center justify-center flex-shrink-0 shadow-sm">
                          <ChevronRightIcon className="w-3.5 h-3.5 stroke-[2.5]" />
                        </span>
                      ) : (
                        <span className="w-6 h-6 flex items-center justify-center text-gray-400 group-hover:text-[#a84523]">
                          <ChevronRightIcon className="w-4 h-4 stroke-[2]" />
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </FadeLeft>

            {/* Promo card */}
            <FadeLeft delay={0.25}>
              <NeedHelpCard {...needHelpData} />
            </FadeLeft>
          </div>

          {/* Service detail content */}
          <div className="lg:col-span-8">
            {/* Banner image */}
            <BlurIn delay={0.1}>
              <div className="relative w-full aspect-[16/8.5] rounded-lg overflow-hidden shadow-sm bg-gray-100">
                <Image
                  src={heroImage}
                  alt={activeServiceData.title || "Service detail banner"}
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 880px"
                />
              </div>
            </BlurIn>

            {/* Overview section */}
            <FadeUp delay={0.2}>
              <div className="mt-5 sm:mt-6">
                {/* Overview badge */}
                {overviewBadge && (
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="h-[1.5px] w-10 bg-[#a84523] rounded-full" />
                    <span className="text-[12px] sm:text-[12.5px] font-semibold text-[#555555] tracking-[0.2em] uppercase">
                      {overviewBadge}
                    </span>
                  </div>
                )}

                {/* Overview title */}
                <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-extrabold text-[#111111] leading-tight mb-2 tracking-tight">
                  {overviewTitlePart1 && overviewHighlight ? (
                    <>
                      {overviewTitlePart1}{" "}
                      <span className="text-[#a84523]">{overviewHighlight}</span>
                    </>
                  ) : (
                    overviewTitle
                  )}
                </h2>

                {/* Overview paragraphs */}
                {overviewParagraphs.map((para: string, i: number) => (
                  <p
                    key={i}
                    className="text-[#666666] text-[14px] sm:text-[14.5px] leading-relaxed mb-2.5 font-normal last:mb-6"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </FadeUp>

            {/* Approach section */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <FadeUp delay={0.1}>
                {/* Approach badge */}
                {approachBadge && (
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="h-[1.5px] w-10 bg-[#a84523] rounded-full" />
                    <span className="text-[12px] sm:text-[12.5px] font-semibold text-[#555555] tracking-[0.2em] uppercase">
                      {approachBadge}
                    </span>
                  </div>
                )}

                {/* Approach title */}
                <h3 className="text-[28px] sm:text-[32px] md:text-[36px] font-extrabold text-[#111111] leading-tight mb-2 tracking-tight">
                  {approachTitlePart1 && approachHighlight ? (
                    <>
                      {approachTitlePart1}{" "}
                      <span className="text-[#a84523]">{approachHighlight}</span>
                    </>
                  ) : (
                    approachTitle
                  )}
                </h3>

                {/* Approach description */}
                {approachDescription && (
                  <p className="text-[#666666] text-[14px] sm:text-[14.5px] leading-relaxed mb-4 font-normal">
                    {approachDescription}
                  </p>
                )}
              </FadeUp>

              {/* Feature cards stagger */}
              <StaggerContainer speed="normal">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-4">
                  {features.map((feature, i: number) => (
                    <StaggerItem key={i} variant="up">
                      <div className="group bg-[#FAF8F9] rounded-lg border border-[#ebebeb] p-3.5 sm:p-4 flex flex-col transition-all duration-300 hover:shadow-[0_12px_32px_rgba(168,69,35,0.08)] hover:border-[#a84523]/30 hover:-translate-y-1 h-full">
                        <div className="relative w-full aspect-[16/9.5] rounded-lg overflow-hidden mb-2.5 bg-gray-100 shadow-sm">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, 420px"
                          />
                        </div>
                        <h4 className="font-bold text-[16px] sm:text-[17px] text-[#1c1c1c] mb-1 leading-snug transition-colors duration-200 group-hover:text-[#a84523]">
                          {feature.title}
                        </h4>
                        <p className="text-[#666666] text-[13px] sm:text-[13.5px] leading-relaxed font-normal">
                          {feature.description}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
