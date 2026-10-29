"use client";

import BlogCard from "@/components/cards/BlogCard";
import { site, SectionProps, HirenzBlogData } from "@/data";
import {
  FadeUp,
  FadeLeft,
  StaggerContainer,
  StaggerItem,
} from "@/utils/animation";

export default function BlogSection({
  data = site.blog,
  className = "",
}: SectionProps<HirenzBlogData>) {
  const {
    badge = "OUR RECENT WORK",
    headline = "Latest",
    highlight = "Insights & Resources",
    description = "Explore expert insights, hiring tips, and industry updates to help you build stronger teams and grow your business.",
  } = data || {};

  const blogPosts: any[] = (data as any)?.blogPosts || [];
  const featuredPost = (data as any)?.featuredPost || blogPosts[0];
  const sidePosts: any[] =
    (data as any)?.sidePosts || (blogPosts.length > 1 ? blogPosts.slice(1) : []);

  return (
    <section className={`w-full bg-white font-poppins py-8 lg:py-12 overflow-x-clip ${className}`}>
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-6">
          {/* Tagline badge */}
          {badge && (
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
              <span className="h-[1.5px] w-12 sm:w-16 bg-[#a84523] rounded-full" />
              <span className="text-[12px] sm:text-[13px] font-semibold text-[#111111] tracking-[0.2em] uppercase">
                {badge}
              </span>
              <span className="h-[1.5px] w-12 sm:w-16 bg-[#a84523] rounded-full" />
            </div>
          )}
        </div>

        {/* Section header animation */}
        <FadeUp delay={0.1}>
          <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-6">
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-extrabold text-[#111111] tracking-tight leading-tight">
              {headline} {highlight && <span className="text-[#a84523]">{highlight}</span>}
            </h2>
            {description && (
              <p className="mt-1 text-[#666666] text-[15px] sm:text-[16px] leading-relaxed max-w-[680px] mx-auto">
                {description}
              </p>
            )}
          </div>
        </FadeUp>

        {/* 2-Column blog layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 items-stretch">
          {/* Featured post animation */}
          {featuredPost && (
            <div className="lg:col-span-6 flex flex-col h-full">
              <FadeLeft delay={0.2}>
                <BlogCard
                  variant="featured"
                  title={featuredPost.title}
                  description={featuredPost.description}
                  author={featuredPost.author}
                  date={featuredPost.date}
                  imageSrc={featuredPost.imageSrc}
                  href={featuredPost.href}
                />
              </FadeLeft>
            </div>
          )}

          {/* Side posts stagger animation */}
          <div className="lg:col-span-6 flex flex-col gap-3 sm:gap-3.5">
            <StaggerContainer speed="normal">
              <div className="space-y-3 sm:space-y-3.5">
                {sidePosts.slice(0, 3).map((post, idx) => (
                  <StaggerItem key={post.id || idx} variant="right">
                    <BlogCard
                      variant="compact"
                      title={post.title}
                      author={post.author}
                      date={post.date}
                      imageSrc={post.imageSrc}
                      href={post.href}
                    />
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}