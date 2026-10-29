import BlogCard from "@/components/cards/BlogCard";
import Breadcrumb from "@/components/common/Breadcrumb";
import { site } from "@/data";

// Page metadata
export const metadata = {
  title: "Blog & Insights | Hirenz HR Consultancy",
  description:
    site.blog?.description ||
    "Explore expert hiring insights, recruitment strategies, and workplace culture tips.",
};

export default function BlogPage() {
  const { blog, pageTopSection } = site;
  const posts = blog?.blogPosts || [];

  return (
    <main>
      {/* Page header */}
      <Breadcrumb
        data={pageTopSection}
        title="Blogs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs" },
        ]}
      />
      <section className="w-full bg-white font-poppins py-8 lg:py-12">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Section header */}
          <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-6">
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-extrabold text-[#111111] tracking-tight leading-tight">
              {blog?.headline || "Latest"}{" "}
              <span className="text-[#a84523]">{blog?.highlight || "Insights & Resources"}</span>
            </h2>
            {blog?.description && (
              <p className="mt-1 text-[#666666] text-[15px] sm:text-[16px] leading-relaxed max-w-[680px] mx-auto">
                {blog.description}
              </p>
            )}
          </div>
          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post: any, idx: number) => (
              <BlogCard
                key={post.id || idx}
                variant="featured"
                title={post.title}
                description={post.description}
                author={post.author}
                date={post.date}
                imageSrc={post.imageSrc}
                href={post.href}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
