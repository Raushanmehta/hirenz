import { Suspense } from "react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import BlogDetailSection from "@/sections/BlogDetailSection";
import { site } from "@/data";

interface BlogDetailRouteProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export function generateStaticParams() {
  const posts = site.blog?.blogPosts || [];
  const slugs = new Set<string>();
  posts.forEach((post: any) => {
    if (post.id) slugs.add(post.id);
    const hrefSlug = post.href?.replace("/blog/", "").replace(/^\//, "");
    if (hrefSlug) slugs.add(hrefSlug);
  });
  return Array.from(slugs).map((slug) => ({ slug }));
}

async function BlogDetailContent({ params }: BlogDetailRouteProps) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug || "";
  const slug = decodeURIComponent(rawSlug).toLowerCase().trim();
  const blogData = site.blog;

  const matchedPost = blogData?.blogPosts?.find(
    (item: any) =>
      item.slug?.toLowerCase() === slug ||
      String(item.id)?.toLowerCase() === slug ||
      item.href === `/blog/${rawSlug}` ||
      item.href === `/blog/${slug}` ||
      item.href?.endsWith(`/${rawSlug}`) ||
      item.href?.endsWith(`/${slug}`) ||
      item.title?.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!matchedPost) {
    notFound();
  }

  const blogTitle = matchedPost.title || "Blog Details";

  return (
    <main>
      <Breadcrumb
        title={"Blog Details"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blog" },
          { label: "Blog Details" },
        ]}
      />
      <BlogDetailSection slug={slug} data={matchedPost} />
    </main>
  );
}

export default function BlogDetailPage({ params }: BlogDetailRouteProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-[#a84523] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <BlogDetailContent params={params} />
    </Suspense>
  );
}
