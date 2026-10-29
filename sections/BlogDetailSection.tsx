"use client";

import Image from "next/image";
import { site, BlogPost } from "@/data";
import {
  CalendarIcon,
  UserIcon,
  CheckmarkIcon,
  DynamicIcon,
} from "@/components/icons";
import {
  FadeUp,
  BlurIn,
  StaggerContainer,
  StaggerItem,
  AnimatedIcon,
} from "@/utils/animation";

export interface BlogDetailSectionProps {
  slug?: string;
  data?: BlogPost;
  className?: string;
}

export default function BlogDetailSection({
  slug,
  data,
  className = "",
}: BlogDetailSectionProps) {
  const allBlogPosts = (site.blog?.blogPosts || []) as BlogPost[];

  const post: any =
    data ||
    (slug
      ? allBlogPosts.find(
        (p: any) =>
          p.slug === slug ||
          String(p.id) === slug ||
          p.href === `/blog/${slug}` ||
          p.href?.endsWith(`/${slug}`)
      )
      : null) ||
    allBlogPosts[0] ||
    {};

  const title = post.title || "Building a Positive Workplace Culture";
  const titlePart1 = post.titlePart1;
  const highlight = post.highlight;
  const date = post.date || "OCTOBER 10, 2026";
  const author = post.author
    ? post.author.startsWith("By ")
      ? post.author
      : `By ${post.author}`
    : "By Admin";
  const heroImage = post.heroImage || post.imageSrc || "/images/service-detail-main.webp";
  const introParagraphs: string[] = post.introParagraphs || (post.description ? [post.description] : []);
  const section1Title = post.section1Title || "Why Workplace Culture Matters";
  const section1Content = post.section1Content || post.description || "";
  const section2Title = post.section2Title || "Key Elements of a Positive Workplace Culture";
  const section2Intro = post.section2Intro || "";
  const keyElements: Array<{ title: string; description: string; icon?: string }> =
    post.keyElements || [];
  const section3Title = post.section3Title || "The Long-Term Impact";
  const section3Content = post.section3Content || "";

  return (
    <article className={`w-full bg-white font-poppins py-8 lg:py-12 overflow-x-clip ${className}`}>
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Article header animation */}
        <FadeUp delay={0.1}>
          <header className="text-center mb-4 sm:mb-6">
            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] font-extrabold text-[#111111] tracking-tight leading-tight mb-2 sm:mb-2.5">
              {titlePart1 && highlight ? (
                <>
                  {titlePart1} <span className="text-[#a84523]">{highlight}</span>
                </>
              ) : (
                title
              )}
            </h1>

            {/* Meta info bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[12px] sm:text-[12.5px] text-gray-500 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-[#a84523]" />
                <span>{date}</span>
              </span>

              <span className="text-gray-300">|</span>

              <span className="inline-flex items-center gap-1.5">
                <UserIcon className="w-3.5 h-3.5 text-[#a84523]" />
                <span>{author}</span>
              </span>
            </div>
          </header>
        </FadeUp>

        {/* Featured banner image */}
        <BlurIn delay={0.2}>
          <div className="relative w-full aspect-[16/8] rounded-lg overflow-hidden shadow-sm bg-gray-100 mb-6 sm:mb-8">
            <Image
              src={heroImage}
              alt={title}
              fill
              priority
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1040px) 100vw, 1040px"
            />
          </div>
        </BlurIn>

        {/* Article body content */}
        <div className="space-y-6 sm:space-y-7">
          {/* Introductory paragraphs */}
          {introParagraphs && introParagraphs.length > 0 && (
            <FadeUp delay={0.1}>
              <div className="space-y-3">
                {introParagraphs.map((para, idx) => (
                  <p key={idx} className="text-[#555555] text-[14.5px] sm:text-[15px] leading-relaxed font-normal">
                    {para}
                  </p>
                ))}
              </div>
            </FadeUp>
          )}

          {/* Section 1 */}
          {section1Title && (
            <FadeUp delay={0.15}>
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-1.5 h-5 sm:h-6 bg-[#a84523] rounded-full flex-shrink-0" />
                  <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#111111] tracking-tight">
                    {section1Title}
                  </h2>
                </div>
                {section1Content && (
                  <p className="text-[#555555] text-[14px] sm:text-[14.5px] leading-relaxed font-normal">
                    {section1Content}
                  </p>
                )}
              </div>
            </FadeUp>
          )}

          {/* Section 2 */}
          {section2Title && (
            <div>
              <FadeUp delay={0.15}>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-1.5 h-5 sm:h-6 bg-[#a84523] rounded-full flex-shrink-0" />
                  <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#111111] tracking-tight">
                    {section2Title}
                  </h2>
                </div>
                {section2Intro && (
                  <p className="text-[#666666] text-[14px] sm:text-[14.5px] leading-relaxed mb-4 font-normal">
                    {section2Intro}
                  </p>
                )}
              </FadeUp>

              {/* Key elements cards */}
              {keyElements && keyElements.length > 0 && (
                <StaggerContainer speed="normal">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {keyElements.map((el, index) => (
                      <StaggerItem key={index} variant="up">
                        <div className="group bg-[#FAF8F9] rounded-lg border border-[#ebebeb] p-3.5 sm:p-4 flex items-start gap-3 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(168,69,35,0.08)] hover:border-[#a84523]/30 h-full">
                          <div className="w-8 h-8 rounded-full bg-[#faebe5] text-[#a84523] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                            <AnimatedIcon animation="bounce">
                              {el.icon ? (
                                <DynamicIcon name={el.icon} className="w-4 h-4 stroke-[2.5]" />
                              ) : (
                                <CheckmarkIcon className="w-4 h-4 stroke-[2.5]" />
                              )}
                            </AnimatedIcon>
                          </div>
                          <div>
                            <h3 className="font-bold text-[15px] sm:text-[15.5px] text-[#1c1c1c] leading-snug transition-colors duration-200 group-hover:text-[#a84523]">
                              {el.title}
                            </h3>
                            <p className="text-[#666666] text-[13px] sm:text-[13.5px] leading-relaxed mt-0.5 font-normal">
                              {el.description}
                            </p>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              )}
            </div>
          )}

          {/* Section 3 */}
          {section3Title && (
            <FadeUp delay={0.15}>
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-1.5 h-5 sm:h-6 bg-[#a84523] rounded-full flex-shrink-0" />
                  <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#111111] tracking-tight">
                    {section3Title}
                  </h2>
                </div>
                {section3Content && (
                  <p className="text-[#555555] text-[14px] sm:text-[14.5px] leading-relaxed font-normal">
                    {section3Content}
                  </p>
                )}
              </div>
            </FadeUp>
          )}
        </div>
      </div>
    </article>
  );
}
