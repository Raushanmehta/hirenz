import { notFound } from "next/navigation";
import PageTopSection from "@/components/common/PageTopSection";
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

export default async function BlogDetailPage({ params }: BlogDetailRouteProps) {
  const { slug } = await params;
  const blogData = site.blog;

  const matchedPost = blogData?.blogPosts?.find(
    (item: any) =>
      item.slug === slug ||
      String(item.id) === slug ||
      item.href === `/blog/${slug}` ||
      item.href?.endsWith(`/${slug}`)
  );

  if (!matchedPost) {
    notFound();
  }

  return (
    <main>
      <PageTopSection
        title={matchedPost.title || "Blog Detail"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: matchedPost.title || "Blog Detail" },
        ]}
      />
      <BlogDetailSection slug={slug} data={matchedPost} />
    </main>
  );
}