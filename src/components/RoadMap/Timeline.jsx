import React from "react";

export default function Timeline({ title = "", children }) {
  return (
    <li className="flex items-center">
      <div className="xl:w-40 w-24 h-full flex items-center">
        <h6 className="text-white">{title}</h6>
      </div>
      <div className="flex-1 p-4 relative xl:pl-24 pl-10 border-l border-l-[#C2CFE8] py-8">
        <div className="w-7 h-7 bg-[#643ECF] border border-[#B8B8B8] absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="w-full max-w-lg text-white bg-gradient-to-b overflow-hidden rounded-lg from-app-primary to-app-secondary p-px">
          <div className="w-full rounded-lg h-full bg-[#1B1A28] p-4">
            {children}{" "}
          </div>
        </div>
      </div>
    </li>
  );
}
