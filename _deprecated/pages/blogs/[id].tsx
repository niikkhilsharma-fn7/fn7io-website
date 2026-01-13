import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { blogsData, type Blog } from "@/data/blogs";
import { usePreserveQueryParams } from "@/hooks/usePreserveQueryParams";

interface BlogDetailPageProps {
  blog: Blog | null;
}

export const getServerSideProps: GetServerSideProps<BlogDetailPageProps> = async (context) => {
  const { id } = context.params!;

  // Find the blog by ID
  const blog = blogsData.find((b) => b.id === id) || null;

  // If blog not found, return 404
  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog,
    },
  };
};

export default function BlogDetailPage({ blog }: BlogDetailPageProps) {
  const router = useRouter();
  const { getLinkWithQuery } = usePreserveQueryParams();

  if (!blog) {
    return null;
  }

  // Get related blogs (same category, excluding current)
  const relatedBlogs = blogsData.filter((b) => b.category === blog.category && b.id !== blog.id).slice(0, 3);

  return (
    <>
      <Head>
        <title>{blog.title} - fn7 Blog</title>
        <meta name="description" content={blog.metaDescription || blog.excerpt} />
        <meta name="keywords" content={blog.keywords?.join(", ") || blog.tags.join(", ")} />

        {/* Open Graph tags */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.metaDescription || blog.excerpt} />
        <meta property="og:image" content={blog.ogImage || blog.featuredImage || blog.thumbnail} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.fn7.io/blogs/${blog.id}`} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.metaDescription || blog.excerpt} />
        <meta name="twitter:image" content={blog.ogImage || blog.featuredImage || blog.thumbnail} />

        {/* Canonical URL */}
        {blog.canonicalUrl && <link rel="canonical" href={blog.canonicalUrl} />}
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section with Featured Image */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
          <div className="relative">
            {/* Featured Image */}
            {(blog.featuredImage || blog.thumbnail) && (
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <Image
                  src={blog.featuredImage || blog.thumbnail}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              </div>
            )}

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="container mx-auto max-w-4xl">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                  <Link href={getLinkWithQuery("/blogs")} className="hover:text-white transition-colors">
                    Blogs
                  </Link>
                  <span>/</span>
                  <span>{blog.category}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{blog.title}</h1>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-white">{blog.author.name.charAt(0)}</span>
                    </div>
                    <span className="font-medium">{blog.author.name}</span>
                  </div>
                  <span>•</span>
                  <time dateTime={blog.publishedDate}>
                    {new Date(blog.publishedDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Blog Content */}
          <div
            className="blog-content max-w-none text-gray-700 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content.trim() }}
          />

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(
                  `https://www.fn7.io/blogs/${blog.id}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Share on X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  `https://www.fn7.io/blogs/${blog.id}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Share on LinkedIn
              </a>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <Link key={relatedBlog.id} href={getLinkWithQuery(`/blogs/${relatedBlog.id}`)} className="group">
                    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        {relatedBlog.thumbnail ? (
                          <Image
                            src={relatedBlog.thumbnail}
                            alt={relatedBlog.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {relatedBlog.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3">{relatedBlog.excerpt}</p>
                        <div className="mt-4 text-sm text-gray-500">{relatedBlog.readTime}</div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
