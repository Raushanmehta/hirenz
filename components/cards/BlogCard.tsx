"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, UserIcon } from "@/components/icons";
import { AnimatedIcon } from "@/utils/animation";

export interface BlogCardProps {
  variant?: "featured" | "compact";
  title: string;
  description?: string;
  author?: string;
  date: string;
  imageSrc: string;
  href?: string;
}

function UserBadge() {
  return (
    <div className="w-[18px] h-[18px] rounded-full bg-[#a84523] flex items-center justify-center text-white flex-shrink-0">
      <AnimatedIcon animation="rotateHover">
        <UserIcon className="w-2.5 h-2.5 fill-current" />
      </AnimatedIcon>
    </div>
  );
}

export default function BlogCard({
  variant = "compact",
  title,
  description,
  author = "ADMIN",
  date,
  imageSrc,
  href = "#",
}: BlogCardProps) {
  if (variant === "featured") {
    return (
      <article className="group bg-white rounded-lg border border-[#ebebeb] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(168,69,35,0.12)] transition-all duration-300 flex flex-col h-full">
        {/* Featured blog image */}
        <div className="relative aspect-[500/202] w-full overflow-hidden bg-gray-100">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 540px"
          />
        </div>

        {/* Featured card content */}
        <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
          <div>
            {/* Author meta badge */}
            <div className="flex items-center gap-2 mb-1.5">
              <UserBadge />
              <span className="text-[11px] sm:text-[12px] font-semibold text-[#777777] tracking-wider uppercase">
                {author} <span className="mx-1 text-gray-300">|</span> {date}
              </span>
            </div>

            {/* Post title */}
            <h3 className="font-poppins font-bold text-[19px] sm:text-[22px] text-[#111111] leading-snug mb-1.5 transition-colors duration-200 group-hover:text-[#a84523]">
              <Link href={href}>{title}</Link>
            </h3>

            {/* Excerpt description */}
            {description && (
              <p className="font-poppins font-normal text-[13.5px] sm:text-[14px] text-[#666666] leading-relaxed mb-1">
                {description}
              </p>
            )}
          </div>

          {/* Read more button */}
          <div>
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#a84523] uppercase tracking-wider group/link transition-all"
            >
              <span className="border-b-[1.5px] border-[#a84523] pb-0.5">
                READ MORE
              </span>
              <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Compact card item
  return (
    <article className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
      {/* Compact thumbnail image */}
      <div className="relative w-full sm:w-[220px] md:w-[240px] aspect-[18/11] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 shadow-sm">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 240px"
        />
      </div>

      {/* Post details */}
      <div className="flex flex-col flex-1">
        {/* Author meta row */}
        <div className="flex items-center gap-2 mb-1">
          <UserBadge />
          <span className="text-[11px] font-semibold text-[#777777] tracking-wider uppercase">
            {author} <span className="mx-1 text-gray-300">|</span> {date}
          </span>
        </div>

        {/* Compact title */}
        <h3 className="font-poppins font-bold text-[16px] sm:text-[20px] text-[#111111] leading-snug mb-1.5 transition-colors duration-200 group-hover:text-[#a84523]">
          <Link href={href}>{title}</Link>
        </h3>

        {/* Read more link */}
        <div>
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#a84523] uppercase tracking-wider group/link transition-all"
          >
            <span className="border-b-[1.5px] border-[#a84523] pb-0.5">
              READ MORE
            </span>
            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
