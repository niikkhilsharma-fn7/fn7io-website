This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

Go to the right folder path:

- fn7/backend/node-gke/fastly-nextjs

Install the dependancies:

```bash
npm i
```

### Environment Variables Setup

This project uses environment variables to configure different URLs for development and production environments.

1. **Environment Files:**
   - `.env.development` - Automatically loaded when running `npm run dev`
   - `.env.production` - Automatically loaded when running `npm run build` or `npm start`
   - `.env.local` - Optional, for local overrides (gitignored, highest priority)
   - `.env.example` - Template file showing required variables

2. **Required Environment Variables:**
   - `NEXT_PUBLIC_SIGNUP_BASE_URL` - Base URL for the signup endpoint
     - Development: `https://atlas.dev2.app.fn7.io/auth/provider/signup`
     - Production: `https://atlas.app.fn7.io/auth/provider/signup`

3. **How It Works:**
   - When you run `npm run dev`, Next.js automatically loads `.env.development`
   - When you run `npm run build` or `npm start`, Next.js automatically loads `.env.production`
   - You can create `.env.local` to override values for local development (this file is gitignored)

4. **Setting Up for First Time:**
   ```bash
   # The environment files (.env.development and .env.production) are already configured
   # If you need to override for local development, copy .env.example to .env.local:
   cp .env.example .env.local
   # Then edit .env.local with your custom values
   ```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

### Deploy on Fastly

Run below command to deploy this project to fastly

```bash
npm run fastly-deploy --token
```
