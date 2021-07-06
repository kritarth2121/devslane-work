import React from "react";

function Uppermid1() {
  return (
    <div className="w-full bg-green-50 flex flex-col justify-center items-center">
      <div className="text-3xl font-semibold mt-20 mb-10">
        Get your favorites for free
      </div>

      <div
        className="
          flex flex-row
          justify-center
          space-x-6
          md:space-x-16
          text-2xl
          font-medium
        "
      >
        <div className="border-b-4 border-green-900 text-center w-20">
          25 <span className="text-yellow-600 text-base">&#9733;</span>
        </div>
        <div>
          50<span className="text-yellow-600 text-base">&#9733;</span>
        </div>
        <div>
          150<span className="text-yellow-600 text-base">&#9733;</span>
        </div>
        <div>
          200<span className="text-yellow-600 text-base">&#9733;</span>
        </div>
        <div>
          400<span className="text-yellow-600 text-base">&#9733;</span>
        </div>
      </div>
    </div>
  );
}

export default Uppermid1;
