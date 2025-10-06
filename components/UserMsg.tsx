export const UserMsg: React.FC<{ text: string }> = ({ text }) => (
  <div className="self-end bg-[#161616] rounded-lg p-3 mb-4 max-w-[75%]">
    <p className="text-[14px] whitespace-pre-line">{text}</p>
  </div>
);