"use client";

import Link from "next/link";
import React from "react";
import { PhoneIcon, MailIcon, FileTextIcon } from "@/components/icons";
import { AnimatedIcon, AnimatedButton } from "@/utils/animation";

export interface NeedHelpCardProps {
  badge?: string;
  titlePart1?: string;
  highlight?: string;
  description?: string;
  phone?: string;
  email?: string;
  downloadText?: string;
  downloadHref?: string;
}

export default function NeedHelpCard({
  badge = "LET'S TALK",
  titlePart1 = "Connect With",
  highlight = "Our Experts",
  description = "Have questions or need guidance? Our team is here to help you find the right talent solutions.",
  phone = "+1 000000000",
  email = "info@xyz.com",
  downloadText = "Download PDF",
  downloadHref = "/contact",
}: NeedHelpCardProps) {
  return (
    <div className="relative rounded-lg bg-[#141414] p-4 sm:p-5 text-white overflow-hidden shadow-xl border border-white/5">
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-[#a84523]/30 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />

      {/* Tagline badge */}
      {badge && (
        <div className="relative z-10 flex items-center gap-2 mb-2">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#a84523] uppercase">
            {badge}
          </span>
          <span className="h-[1.5px] w-8 bg-[#a84523] rounded-full" />
        </div>
      )}

      {/* Headline title */}
      <h3 className="relative z-10 text-[22px] sm:text-[24px] font-extrabold leading-[1.2] mb-2">
        {titlePart1} <br />
        <span className="text-[#a84523]">{highlight}</span>
      </h3>

      {/* Card description */}
      {description && (
        <p className="relative z-10 text-gray-300 text-[13px] leading-relaxed mb-4 font-normal">
          {description}
        </p>
      )}

      {/* Contact info rows */}
      <div className="relative z-10 space-y-3 mb-5">
        {/* Phone link */}
        {phone && (
          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-3 group transition-opacity hover:opacity-90"
          >
            <div className="w-10 h-10 rounded-full bg-[#a84523] flex items-center justify-center text-white flex-shrink-0 shadow-md">
              <AnimatedIcon animation="bounce">
                <PhoneIcon className="w-4 h-4" />
              </AnimatedIcon>
            </div>
            <div>
              <p className="text-[11px] text-gray-400 font-medium">Call Us</p>
              <p className="text-[14.5px] sm:text-[15px] font-bold text-white mt-0.5 group-hover:text-[#a84523] transition-colors">
                {phone}
              </p>
            </div>
          </a>
        )}

        {/* Email link */}
        {email && (
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 group transition-opacity hover:opacity-90"
          >
            <div className="w-10 h-10 rounded-full bg-[#a84523] flex items-center justify-center text-white flex-shrink-0 shadow-md">
              <AnimatedIcon animation="bounce">
                <MailIcon className="w-4 h-4" />
              </AnimatedIcon>
            </div>
            <div>
              <p className="text-[11px] text-gray-400 font-medium">Email Us</p>
              <p className="text-[14.5px] sm:text-[15px] font-bold text-white mt-0.5 group-hover:text-[#a84523] transition-colors">
                {email}
              </p>
            </div>
          </a>
        )}
      </div>

      {/* Download action button */}
      {downloadText && (
        <div className="relative z-10">
          <AnimatedButton>
            <Link
              href={downloadHref}
              className="w-full bg-[#a84523] hover:bg-[#9a3e20] active:bg-[#8b371b] text-white py-3 rounded-lg font-bold text-[13px] sm:text-[13.5px] flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_4px_16px_rgba(168,69,35,0.25)] hover:shadow-[0_6px_20px_rgba(168,69,35,0.35)]"
            >
              <FileTextIcon className="w-4 h-4" />
              <span>{downloadText}</span>
            </Link>
          </AnimatedButton>
        </div>
      )}
    </div>
  );
}