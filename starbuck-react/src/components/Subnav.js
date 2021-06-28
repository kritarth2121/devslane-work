import React from "react";

function Subnav() {
  return (
    <div className="sticky top-0 z-30  px-5 md:fixed md:top-24 items-center bg-green-900 h-12 w-full flex justify-between md:justify-start md:pl-10">
      <div
        class="
          text-lg
          font-bold
          text-white
        "
      >
        STARBUCKS REWARDS
      </div>
      <div
        className="flex h-8 w-40 
        items-center md:hidden rounded-full border-2 border-white text-white justify-center "
      >
        Join in the app
      </div>
    </div>
  );
}

export default Subnav;
