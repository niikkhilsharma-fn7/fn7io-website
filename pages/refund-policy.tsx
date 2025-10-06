import Head from "next/head";
import Link from "next/link";

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund & Cancellation Policy - fn7</title>
        <meta name="description" content="fn7's refund and cancellation policy. Learn about our 7-day free trial, subscription management, and billing terms." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 px-6 md:px-8 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Refund & Cancellation Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: August 19, 2025
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-6 md:px-8 lg:px-12 pb-20">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-700 leading-relaxed mb-8">
              Thank you for choosing fn7. We are committed to providing a transparent and straightforward billing experience.
              This policy outlines our terms regarding payments, subscriptions, and refunds. Please read it carefully before making a purchase.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">
              1. Our "No Refund" Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All payments made are non-refundable. Once a payment or charge has been processed, the sale is final,
              and we will not issue a refund for any reason.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              We do not provide refunds or credits for:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li>Partial months of service.</li>
              <li>Unused time remaining in your subscription.</li>
              <li>Plan downgrades.</li>
              <li>Accidental purchases or forgotten cancellations.</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">
              2. Why We Don't Offer Refunds: The Free Trial
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer a <strong>7-day free trial period</strong> for all new users. This trial is designed to give you
              ample opportunity to explore our platform, use its features, and determine if it is the right solution
              for your needs before you commit to a paid plan.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              We encourage you to use this trial period to its fullest extent. Your decision to upgrade to a paid plan
              is taken as confirmation that you are satisfied with the service.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">
              3. Subscription Cancellation
            </h2>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-3">
              <li>You are in full control of your subscription and can cancel at any time.</li>
              <li>
                You are solely responsible for properly canceling your subscription. You can do this from the
                "Billing" or "Account Settings" section within your Scout dashboard.
              </li>
              <li>
                When you cancel, your subscription will remain active until the end of your current paid billing period.
              </li>
              <li>
                Once the billing period ends, you will not be charged again, and your account will be transitioned
                to our free plan or deactivated.
              </li>
              <li>
                It is your responsibility to cancel your subscription before your next billing date to avoid being
                charged for the next cycle.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">
              4. Exceptions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              The only exception to this policy is if we are required to issue a refund by applicable law in your jurisdiction.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              If you have any questions about your subscription or this billing policy, please{" "}
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 underline">
                contact us here
              </Link>
              . We are happy to clarify any charges or help you manage your account.
            </p>

            {/* Call to Action */}
            <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
              <h3 className="text-xl font-bold text-black mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Get beta access and see the difference it makes.
              </p>
              <a
                href="https://www.fn7.io/get-form"
                className="inline-block py-3 px-8 text-white font-medium rounded-lg transition-all duration-300 bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 hover:from-red-500 hover:via-pink-500 hover:to-purple-600 transform hover:scale-105"
              >
                Start Your Free Trial
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
