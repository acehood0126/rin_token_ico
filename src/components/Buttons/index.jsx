import React from "react";

export default function Button({ children, ...rest }) {
  return (
    <div className="relative w-max">
      <div className="bg-red-300 w-full h-full absolute left-2 top-2 bg-gradient-to-br from-app-primary to-app-secondary rounded-xl -z-0 p-px">
        <div className="w-full h-full bg-background rounded-xl" />
      </div>
      <button
        {...rest}
        className="bg-gradient-to-br from-app-primary to-app-secondary flex items-center gap-4 py-4 px-6 text-white text-base font-normal rounded-xl relative"
      >
        {children}
      </button>
    </div>
  );
}
