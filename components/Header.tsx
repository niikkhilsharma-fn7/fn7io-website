"use client";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className="flex flex-col justify-center self-stretch px-10 py-3 w-full text-base tracking-tighter leading-3 bg-white max-md:px-5 max-md:max-w-full">
      <nav className="flex flex-wrap gap-10 justify-between items-center py-2 w-full max-md:max-w-full">
        <div className="flex shrink-0 self-stretch my-auto h-[34px] w-[139px]" />
        <ul className="flex gap-6 justify-center items-center self-stretch my-auto text-black min-w-60 w-[291px]">
          <li className="self-stretch my-auto font-bold text-black">Home</li>
          <li className="self-stretch my-auto text-black">Atlas Platform</li>
          <li className="self-stretch my-auto text-black">Blogs</li>
          <li className="self-stretch my-auto text-black">FAQs</li>
        </ul>
        <button className="flex gap-2 justify-center items-center self-stretch p-3 my-auto text-white bg-black rounded-md">
          <span className="self-stretch my-auto text-white">
            Reserve Access
          </span>
        </button>
      </nav>
    </header>
  );
};
