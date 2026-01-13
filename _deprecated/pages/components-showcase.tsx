import Head from "next/head";
import { FeatureCard } from "@/components/FeatureCard";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function ComponentsShowcase() {
  return (
    <>
      <Head>
        <title>Components Showcase - FN7</title>
      </Head>

      <div className="min-h-screen bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 text-transparent bg-clip-text">
              Components Showcase
            </h1>
            <p className="text-center text-gray-600 mb-20">
              All the new components and animations we've added
            </p>
          </AnimatedSection>

          {/* Feature Cards Section */}
          <AnimatedSection animation="slideUp" delay={200}>
            <h2 className="text-3xl font-semibold mb-8">Feature Cards with Hover Effects</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <FeatureCard
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                title="Lightning Fast"
                description="Experience blazing fast performance with our optimized components and smooth animations."
                gradient={true}
              />
              <FeatureCard
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                }
                title="Fully Customizable"
                description="Adjust every aspect to match your brand with our flexible component system."
                gradient={true}
              />
              <FeatureCard
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                }
                title="Mobile First"
                description="Built with mobile responsiveness in mind from the ground up."
                gradient={true}
              />
            </div>
          </AnimatedSection>

          {/* Animation Types */}
          <AnimatedSection animation="slideLeft" delay={300}>
            <h2 className="text-3xl font-semibold mb-8">Animation Types</h2>
            <div className="space-y-6 mb-20">
              <AnimatedSection animation="fadeIn" delay={400}>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold mb-2">Fade In Animation</h3>
                  <p className="text-gray-600">This content fades in smoothly when scrolled into view.</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slideUp" delay={500}>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold mb-2">Slide Up Animation</h3>
                  <p className="text-gray-600">This content slides up from below when visible.</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slideRight" delay={600}>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold mb-2">Slide Right Animation</h3>
                  <p className="text-gray-600">This content slides in from the left side.</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="scale" delay={700}>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold mb-2">Scale Animation</h3>
                  <p className="text-gray-600">This content scales up smoothly when it enters the viewport.</p>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Features Implemented */}
          <AnimatedSection animation="slideUp" delay={400}>
            <h2 className="text-3xl font-semibold mb-8">Features Implemented</h2>
            <div className="bg-gradient-to-r from-red-50 to-purple-50 rounded-2xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Modern hero section with gradient backgrounds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Feature cards with hover effects and gradient borders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Testimonials carousel with auto-play and hover pause</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Smooth scroll animations with intersection observer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Mobile-responsive design with carousels and optimized layouts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Rotating messages in WhyChooseSection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Active page highlighting in navigation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Consistent 1200px max-width for all desktop sections</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}