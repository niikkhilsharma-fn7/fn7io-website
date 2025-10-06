interface SearchProps {
  title: string;
  description: string;
  href: string;
}

export const Search = ({ title, description, href }: SearchProps) => {
    console.log(description)
  return (
    <div className="py-3 pt-0 border-b border-[#ffffff0f]">
      <a
        href={href}
        target="_blank"
        className="block text-[#dadada] text-sm font-medium hover:underline line-clamp-2 cursor-pointer py-2"
      >
        {title}
      </a>
      <div className="text-[#7f7f7f] text-xs mt-0.5 line-clamp-3">{description}</div>
    </div>
  );
};