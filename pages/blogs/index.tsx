import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { blogsData, type Blog } from '@/data/blogs';
import { usePreserveQueryParams } from '@/hooks/usePreserveQueryParams';

// Use imported blog data
const allBlogs: Blog[] = blogsData;

const POSTS_PER_PAGE = 6;

interface BlogsPageProps {
  blogs: Blog[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
}

export const getServerSideProps: GetServerSideProps<BlogsPageProps> = async (context) => {
  const page = parseInt(context.query.page as string) || 1;

  // Sort blogs by published date (newest first)
  const sortedBlogs = [...allBlogs].sort((a, b) => {
    return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
  });

  // Calculate pagination
  const totalPosts = sortedBlogs.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;

  // Get blogs for current page
  const blogs = sortedBlogs.slice(startIndex, endIndex);

  // Redirect if page is out of bounds
  if (page < 1 || page > totalPages) {
    return {
      redirect: {
        destination: '/blogs',
        permanent: false,
      },
    };
  }

  return {
    props: {
      blogs,
      currentPage: page,
      totalPages,
      totalPosts,
    },
  };
};

export default function BlogsPage({ blogs, currentPage, totalPages, totalPosts }: BlogsPageProps) {
  const router = useRouter();
  const { getLinkWithQuery } = usePreserveQueryParams();

  const categoryColors: Record<string, { bg: string; text: string; gradient: string }> = {
    AI: {
      bg: 'bg-gradient-to-r from-purple-500 to-indigo-600',
      text: 'text-white',
      gradient: 'from-purple-400 to-indigo-600'
    },
    Business: {
      bg: 'bg-gradient-to-r from-blue-500 to-cyan-600',
      text: 'text-white',
      gradient: 'from-blue-400 to-cyan-600'
    },
    Technology: {
      bg: 'bg-gradient-to-r from-green-500 to-emerald-600',
      text: 'text-white',
      gradient: 'from-green-400 to-emerald-600'
    },
    'AI Leadership': {
      bg: 'bg-gradient-to-r from-violet-500 to-purple-600',
      text: 'text-white',
      gradient: 'from-violet-400 to-purple-600'
    },
    'Revenue Intelligence': {
      bg: 'bg-gradient-to-r from-amber-500 to-orange-600',
      text: 'text-white',
      gradient: 'from-amber-400 to-orange-600'
    },
    'Sales & AI': {
      bg: 'bg-gradient-to-r from-rose-500 to-pink-600',
      text: 'text-white',
      gradient: 'from-rose-400 to-pink-600'
    },
    'AI Strategy': {
      bg: 'bg-gradient-to-r from-teal-500 to-cyan-600',
      text: 'text-white',
      gradient: 'from-teal-400 to-cyan-600'
    },
  };

  const getCategoryStyle = (category: string) => {
    return categoryColors[category] || {
      bg: 'bg-gradient-to-r from-gray-500 to-slate-600',
      text: 'text-white',
      gradient: 'from-gray-400 to-slate-600'
    };
  };

  return (
    <>
      <Head>
        <title>Blogs - fn7 | Insights on AI Agents and Go-To-Market Automation</title>
        <meta name="description" content="Explore insights and updates from fn7 on AI agents, go-to-market automation, and scaling your business with cutting-edge AI technology." />
        <meta name="keywords" content="fn7 blog, AI agents, go-to-market automation, business scaling, AI insights, marketing automation" />
        <meta name="author" content="fn7" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Blogs - fn7 | AI Insights and Updates" />
        <meta property="og:description" content="Explore insights and updates from fn7 on AI agents, go-to-market automation, and scaling your business." />
        <meta property="og:image" content="https://www.fn7.io/fn7_logo.jpeg" />
        <meta property="og:url" content="https://www.fn7.io/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="fn7" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blogs - fn7 | AI Insights and Updates" />
        <meta name="twitter:description" content="Explore insights from fn7 on AI agents and go-to-market automation." />
        <meta name="twitter:image" content="https://www.fn7.io/fn7_logo.jpeg" />
        <meta name="twitter:site" content="@fn7io" />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://www.fn7.io/blogs${currentPage > 1 ? `?page=${currentPage}` : ''}`} />

        {/* Favicon */}
        <link rel="icon" href="/fn7_nav_logo.svg" type="image/svg+xml" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-white">

        {/* Hero Section */}
      <div className="bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-3">Blogs</h1>
          <p className="text-lg text-gray-300">
            Insights and updates from our team
          </p>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => {
            const categoryStyle = getCategoryStyle(blog.category);
            return (
              <Link
                key={blog.id}
                href={getLinkWithQuery(`/blogs/${blog.id}`)}
                className="group block h-full"
              >
                <article className="relative h-full bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-gray-300 flex flex-col">
                  {/* Thumbnail */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    {blog.thumbnail ? (
                      <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <>
                        <div className={`absolute inset-0 bg-gradient-to-br ${categoryStyle.gradient} opacity-90`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white/20 text-6xl font-bold select-none">
                            {blog.category}
                          </span>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
                        <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-200 ${categoryStyle.bg} ${categoryStyle.text}`}>
                        {blog.category}
                      </span>
                      <span className="text-xs text-gray-500">{blog.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {blog.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-white">
                            {blog.author.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{blog.author.name}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-2">
            {/* Previous Button */}
            <Link
              href={currentPage > 1 ? getLinkWithQuery('/blogs', { page: currentPage - 1 }) : '#'}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage > 1
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-gray-50 text-gray-400 cursor-not-allowed'
              }`}
              onClick={(e) => currentPage === 1 && e.preventDefault()}
            >
              Previous
            </Link>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                const isActive = pageNum === currentPage;

                // Show first page, last page, current page, and adjacent pages
                if (
                  pageNum === 1 ||
                  pageNum === totalPages ||
                  Math.abs(pageNum - currentPage) <= 1
                ) {
                  return (
                    <Link
                      key={pageNum}
                      href={getLinkWithQuery('/blogs', { page: pageNum })}
                      className={`w-10 h-10 rounded-lg font-medium transition-all flex items-center justify-center ${
                        isActive
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {pageNum}
                    </Link>
                  );
                } else if (
                  pageNum === currentPage - 2 ||
                  pageNum === currentPage + 2
                ) {
                  return <span key={pageNum} className="px-2 text-gray-400">...</span>;
                }
                return null;
              })}
            </div>

            {/* Next Button */}
            <Link
              href={currentPage < totalPages ? getLinkWithQuery('/blogs', { page: currentPage + 1 }) : '#'}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage < totalPages
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-gray-50 text-gray-400 cursor-not-allowed'
              }`}
              onClick={(e) => currentPage === totalPages && e.preventDefault()}
            >
              Next
            </Link>
          </div>
        )}
      </div>
      </div>
    </>
  );
}
