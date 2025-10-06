interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  gradient?: boolean;
  className?: string;
}

export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  gradient = false,
  className = "" 
}: FeatureCardProps) => {
  return (
    <div 
      className={`
        group relative p-8 rounded-2xl bg-white 
        border border-gray-200 
        shadow-lg hover:shadow-2xl 
        transition-all duration-300 ease-in-out
        hover:-translate-y-2 hover:scale-[1.02]
        cursor-pointer
        ${gradient ? 'hover:border-transparent' : 'hover:border-gray-300'}
        ${className}
      `}
    >
      {gradient && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      )}
      
      {icon && (
        <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-red-400 to-purple-500 text-white">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-purple-500 transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
    </div>
  );
};