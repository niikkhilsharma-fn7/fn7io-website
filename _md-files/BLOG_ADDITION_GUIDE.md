# Blog Addition Process

## Step 1: Gather Information
AI asks only 2 questions:
1. "Please provide the blog content"
2. "Please provide the blog thumbnail image"

## Step 2: AI Processing & Display
After receiving content and image, AI will show you:

```
📝 Processing your blog...

✅ Extracted title: "Your Blog Title Here"
✅ Generated slug: /blogs/your-blog-title-here
✅ Category detected: AI Strategy
✅ Read time calculated: 8 min read
✅ Tags identified: [AI, Leadership, Innovation]
✅ SEO meta generated
✅ Image saved as: /blogs/2025-07-29-your-blog-title.jpg

📄 Blog Data Structure:
{
  id: "your-blog-title-here",  // SEO-friendly ID (same as slug)
  title: "Your Blog Title Here",
  slug: "your-blog-title-here",
  excerpt: "First 150 characters of your content...",
  category: "AI Strategy",
  publishedDate: "2025-07-29",
  readTime: "8 min read",
  author: "Roshini Tribhuvan",
  thumbnail: "/blogs/2025-07-29-your-blog-title.jpg",
  ...
}

Ready to add this blog? (yes/no)
```

## Step 3: Final Actions
After confirmation:
- Blog added to `/data/blogs.ts`
- Cache cleared
- Opens: `http://localhost:3000/blogs/your-blog-title-here`

## Developer Options
You can override any auto-detected values:
- "Use title: Different Title"
- "Set category to Business"
- "Change publish date to 2025-07-30"