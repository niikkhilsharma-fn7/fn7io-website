// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import { Operation } from "./Operation";
import ReactMarkdown from "react-markdown";
import { Search } from "./Search";
// import { FaChevronLeft } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";

const ActivityPanel = ({ selectedOp }) => {
  return (
    <div className="h-full bg-[#383739] rounded-2xl p-8 whitespace-normal overflow-y-auto hide-scrollbar">
      <Operation
        operationMsg={selectedOp.text}
        operationType={selectedOp.operationType}
      />
      <div className="mt-4" />
      {selectedOp.render?.type === "markdown" && (
        <ReactMarkdown>{selectedOp.render.content}</ReactMarkdown>
      )}
      {selectedOp.render?.type === "search" &&
        selectedOp.render.content.map((item, index) => (
          <Search
            key={index}
            title={item.title}
            description={item.description}
            href={item.href}
          />
        ))}
      {selectedOp.render?.type === "browsing" && (
        <img
          src={selectedOp.render.content}
          alt="browsing"
          className="w-full h-auto rounded-lg mt-4"
        />
      )}
      {/* <div className=" flex items-center gap-2.5 px-3 absolute bottom-8 left-2.5 rounded-b-2xl h-10 w-[97%] bg-[#161616]">
        <FaChevronLeft />
        <FaChevronRight/>
        <progress className="w-full"/>
      </div> */}
    </div>
  );
};

export default ActivityPanel;