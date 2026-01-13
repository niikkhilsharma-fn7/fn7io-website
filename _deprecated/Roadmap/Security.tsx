import { SecurityCard } from "../../components/SecurityCard";
import Image from "next/image";

export const Security = () => {
  return (
    <div style={{ backgroundColor: "#E9E9E9" }}>
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* ✅ Full image with top faded out using a gradient mask */}
        <div className="hidden sm:block absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/security_bg.svg"
            alt="Security Background"
            fill
            className="object-cover opacity-100 mask-gradient"
            quality={100}
            priority
          />
        </div>

        {/* ✅ Main Content */}
        <div className="relative z-10 !py-20 lg:py-20 px-6 md:px-20 lg:px-10 md:max-w-[1480px] ultra:max-w-[1700px] mx-auto flex flex-col items-center overflow-hidden">
          <div className="flex flex-col items-center text-center gap-12 mt-16">
            <h2 className="section-heading">Your Security, Our Priority</h2>
          </div>

          <div className="w-full mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 justify-items-center">
              <SecurityCard
                title="Encrypted like a bank"
                description="All your data is locked using AES-256 encryption, the same gold standard trusted by leading financial institutions."
              />
              <SecurityCard
                title="Secrets in a vault"
                description="API Keys, tokens, and sensitive info are stored in a dedicated security vault encrypted & isolated from core systems."
              />
              <SecurityCard
                title="Built on Google cloud"
                description="fn7 runs on Kubernetes Engine (GKE) - infrastructure trusted by Google itself, optimized for speed and scale."
              />
              <SecurityCard
                title="Enterprise-grade shielding"
                description="Google Cloud Armor guards fn7 against DDoS attacks, malicious traffic, and bot abuse at scale."
              />
              <SecurityCard
                title="Continuous security testing"
                description="Using Google’s Web Security Scanner on GKE, we proactively detect & fix vulnerabilities before they pose threats."
              />
              <SecurityCard
                title="OWASP Top 10 covered"
                description="fn7 runs on Kubernetes Engine (GKE) - infrastructure trusted by Google itself, optimized for speed and scale."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
