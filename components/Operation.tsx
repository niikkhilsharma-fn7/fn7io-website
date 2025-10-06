
type OperationProps = {
  operationType: string;
  operationMsg: string;
};

export const Operation = ({ operationMsg, operationType }: OperationProps) => {
  return (
    <div className="rounded-[15px] items-center gap-2 px-[10px] py-[3px] border border-[#ffffff0f] text-[14px] inline-flex max-w-full clickable dark:hover:bg-white/[0.02] bg-[#161616] cursor-pointer">
      {/* <div className="inline-flex items-center h-full rounded-full text-[14px] text-amber-50 w-[100%]">
        {operationMsg}
      </div> */}

      <div className="flex items-center">
        {operationType}
        <span className="flex-1 min-w-0 rounded-[6px] px-1 ml-1 relative top-[0px] text-[12px] max-w-full text-ellipsis overflow-hidden whitespace-nowrap]">
          {operationMsg}
        </span>
      </div>
    </div>
  );
};
