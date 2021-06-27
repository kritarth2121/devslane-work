import React from "react";

function Uppermid1() {
  return (
    <div class="w-full bg-green-50 flex flex-col justify-center items-center">
      <div class="text-3xl font-semibold mt-20 mb-10">
        Get your favorites for free
      </div>

      <div
        class="
          flex flex-row
          justify-center
          space-x-6
          md:space-x-16
          text-2xl
          font-medium
        "
      >
        <div class="border-b-4 border-green-900 text-center w-20">
          25 <span class="text-yellow-600 text-base">&#9733;</span>
        </div>
        <div>
          50<span class="text-yellow-600 text-base">&#9733;</span>
        </div>
        <div>
          150<span class="text-yellow-600 text-base">&#9733;</span>
        </div>
        <div>
          200<span class="text-yellow-600 text-base">&#9733;</span>
        </div>
        <div>
          400<span class="text-yellow-600 text-base">&#9733;</span>
        </div>
      </div>
    </div>
  );
}

export default Uppermid1;
