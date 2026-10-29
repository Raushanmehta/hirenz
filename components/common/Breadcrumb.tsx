"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronRightIcon } from "@/components/icons";
import { site, SectionProps, HirenzPageTopSectionData } from "@/data";
import { FadeUp } from "@/utils/animation";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends SectionProps<HirenzPageTopSectionData> {
  title?: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
}

export type PageTopSectionProps = BreadcrumbProps;

export default function Breadcrumb({
  data = site.pageTopSection,
  title: propTitle,
  breadcrumbs: propBreadcrumbs,
  bgImage: propBgImage,
  className = "",
}: BreadcrumbProps) {
  const title = propTitle || data?.title || "Page Title";
  const breadcrumbs = propBreadcrumbs || data?.breadcrumbs || [
    { label: "Home", href: "/" },
    { label: title },
  ];
  const bgImage = propBgImage || data?.bgImage || "/images/top-banner.webp";

  return (
    <section className={`relative w-full h-[240px] sm:h-[280px] md:h-[300px] flex items-center overflow-hidden font-poppins bg-[#1a0f0b] ${className}`}>
      {/* Background image banner */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={bgImage}
          alt={`${title} background banner`}
          fill
          priority
          className="object-cover object-[right_center] sm:object-[center_center] translate-y-2 sm:translate-y-3 scale-105"
          sizes="100vw"
        />
        {/* Brand #a84523 gradient overlay with soft opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#a84523]/70 via-[#a84523]/40 to-transparent pointer-events-none" />
      </div>

      {/* Foreground title content */}
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full relative z-10">
        <div className="flex flex-col items-start justify-center">
          {/* Main title animation */}
          <FadeUp delay={0.1}>
            <h1 className="text-[36px] sm:text-[44px] md:text-[52px] font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
              {title}
            </h1>
          </FadeUp>

          {/* Breadcrumbs animation */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <FadeUp delay={0.25}>
              <nav
                aria-label="Breadcrumb"
                className="flex items-center flex-wrap gap-1 mt-2 sm:mt-3 text-[14px] sm:text-[15px] font-medium text-white/90 drop-shadow-sm"
              >
                {breadcrumbs.map((item, index) => {
                  const isLast = index === breadcrumbs.length - 1;

                  return (
                    <div key={item.label} className="flex items-center">
                      {item.href && !isLast ? (
                        <Link
                          href={item.href}
                          className="hover:text-white transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className={isLast ? "text-white/80" : "text-white"}>
                          {item.label}
                        </span>
                      )}

                      {!isLast && (
                        <ChevronRightIcon className="w-3.5 h-3.5 mx-1 text-white/70" />
                      )}
                    </div>
                  );
                })}
              </nav>
            </FadeUp>
          )}
        </div>
      </div>
    </section>
  );
}

export { Breadcrumb as PageTopSection };