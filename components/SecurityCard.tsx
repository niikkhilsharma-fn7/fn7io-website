interface SecurityCardProps {
  title: string;
  description: string;
}
export const SecurityCard: React.FC<SecurityCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="relative w-full h-full md:min-h-0 md:h-[220px] pl-[17px] pr-4 py-4 flex flex-col justify-start gap-2">
      {/* Vertical Gradient Line */}
      <div className="absolute left-0 top-0 w-[5px] h-full bg-gradient-to-b from-pink-400 via-purple-400 to-indigo-400 rounded" />

      {/* Card Content */}
      <span className="card-heading">{title}</span>
      <span className="text-[#4B4B4B] text-[20px]">{description}</span>
    </div>
  );
};

