import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white pointer-events-none" />
      <nav className="z-50 w-full mx-auto px-6 py-6 flex justify-between items-center bg-white/60 backdrop-blur-md sticky top-0 border-b border-slate-100">
        <Link href={"/"} className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-colors duration-300">
            {/* Simple Logo Icon */}
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Scout7</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
          <a className="hover:text-blue-600 transition-colors" href="#">
            Product
          </a>
          <a className="hover:text-blue-600 transition-colors" href="#">
            Solutions
          </a>
          <a className="hover:text-blue-600 transition-colors" href="#">
            Pricing
          </a>
          <a className="hover:text-blue-600 transition-colors" href="#">
            Resources
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="text-sm font-semibold text-slate-600 hover:text-blue-600 hidden sm:block transition-colors"
            href="#"
          >
            Log in
          </a>
          <a
            className="text-sm font-bold bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-slate-900 transition-all shadow-lg shadow-blue-500/20 transform hover:-translate-y-0.5"
            href="#"
          >
            Get Started
          </a>
        </div>
      </nav>
    </>
  );
}
