import React from "react";

export default function NFTCards() {
  let arr = new Array(8).fill(0, 0, 8);
  return (
    <div className="xl:my-20 grid-cols-4 xl:grid-cols-4 grid gap-2 xl:gap-14 h-max">
      {arr.map((_, index) => {
        return (
          <div className="w-full bg-white/10  transform even:translate-y-1/2  p-2 xl:p-4 overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={`/assets/images/footbull/${index + 1}.png`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}
