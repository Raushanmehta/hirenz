"use client";

import Link from "next/link";
import React from "react";
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  DynamicIcon,
} from "@/components/icons";
import { AnimatedIcon, AnimatedButton } from "@/utils/animation";

export interface JobItem {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  postedDate: string;
  icon?: React.ReactNode | string;
}

export interface JobsCardProps {
  job: JobItem;
}

export default function JobsCard({ job }: JobsCardProps) {
  const renderedIcon =
    typeof job.icon === "string" ? (
      <DynamicIcon
        name={job.icon}
        className="w-5 h-5 sm:w-6 sm:h-6 text-[#a84523]"
      />
    ) : job.icon ? (
      job.icon
    ) : (
      <BriefcaseIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#a84523]" />
    );

  return (
    <div className="group bg-white rounded-lg border border-[#eeeeee] p-4 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(168,69,35,0.09)] hover:border-[#a84523]/30 transition-all duration-300 hover:-translate-y-1 h-full">
      {/* Icon and header info */}
      <div>
        <div className="flex items-start gap-3 sm:gap-3.5">
          {/* Animated icon badge */}
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#faebe5] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <AnimatedIcon animation="rotateHover">
              {renderedIcon}
            </AnimatedIcon>
          </div>

          {/* Title and metadata */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-[16px] sm:text-[17px] text-[#111111] leading-snug truncate transition-colors duration-200 group-hover:text-[#a84523]">
              {job.title}
            </h3>

            {/* Metadata row */}
            <div className="flex flex-wrap items-center gap-y-0.5 gap-x-1.5 text-[11px] sm:text-[11.5px] text-gray-500 font-medium mt-1">
              <span className="inline-flex items-center gap-1 text-[#a84523] truncate max-w-[140px]">
                <BriefcaseIcon className="w-3 h-3 flex-shrink-0" />
                <span className="text-gray-600 truncate">{job.department}</span>
              </span>

              <span className="text-gray-300">|</span>

              <span className="inline-flex items-center gap-1">
                <MapPinIcon className="w-3 h-3 text-[#a84523] flex-shrink-0" />
                <span className="text-gray-600">{job.location}</span>
              </span>

              <span className="text-gray-300">|</span>

              <span className="inline-flex items-center gap-1">
                <ClockIcon className="w-3 h-3 text-[#a84523] flex-shrink-0" />
                <span className="text-gray-600">{job.type}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Role description */}
        <p className="mt-3 text-[#666666] text-[13px] sm:text-[13.5px] leading-relaxed">
          {job.description}
        </p>
      </div>

      {/* Card apply footer */}
      <div className="pt-3.5 mt-3.5 border-t border-gray-100 flex items-center justify-between">
        <span className="text-[11.5px] sm:text-[12px] text-gray-400 font-normal">
          {job.postedDate}
        </span>

        {/* Apply CTA button */}
        <AnimatedButton>
          <Link
            href="/apply-now"
            className="group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#a84523] text-white text-[12.5px] sm:text-[13px] font-medium transition-all duration-200 shadow-[0_3px_10px_rgba(168,69,35,0.2)] hover:bg-[#8f381a] hover:shadow-[0_4px_14px_rgba(168,69,35,0.3)]"
          >
            <span>Apply Now</span>
            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>
        </AnimatedButton>
      </div>
    </div>
  );
}
