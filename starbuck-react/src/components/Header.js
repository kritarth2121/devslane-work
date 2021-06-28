import React from "react";

function Subnav() {
  return (
    <div className="items-center bg-green-900 h-12 w-full flex justify-around md:justify-start md:pl-10">
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
