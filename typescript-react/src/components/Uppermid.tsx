import React from "react";

function Uppermid() {
  return (
    <div>
      <div
        className="
        mb-10
        flex flex-col
        text-center
        justify-center
        mt-20
        sm:flex-shrink-0
      "
      >
        <div className="text-2xl font-bold">Getting started is easy</div>
        <div className="">Earn Stars and get rewarded in a few easy steps.</div>
      </div>
      <div className="flex md:flex-row text-center md:mx-28 items-center mb-20 flex-col">
        <div
          className="
          text-left
          md:text-center
          items-center
          p-4
          space-x-7
          flex flex-row
          md:flex-col
        "
        >
          <div
            className="
            border-2
            w-12
            h-12
            rounded-full
            border-green-800
            text-green-700
            p-auto
            flex
            justify-center
            items-center
            mb-6
            flex-shrink-0
          "
          >
            1
          </div>

          <div className="flex flex-col">
            <div className="text-xl font-bold mb-3">Create an account</div>

            <div>
              To get started,
              <span className="text-green-700 underline">join now</span>. You
              can also
              <span className="text-green-700 underline">
                join in the app
              </span>{" "}
              to get access to the full range of Starbucks Rewards benefits.
            </div>
          </div>
        </div>
        <div
          className="
          text-left
          md:text-center
          items-center
          p-4
          justify-around
          space-x-7
          flex flex-row
          md:flex-col
        "
        >
          <div
            className="
            border-2
            w-12
            h-12
            rounded-full
            border-green-800
            text-green-700
            p-auto
            flex
            justify-center
            items-center
            mb-6
            flex-shrink-0
          "
          >
            2
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold mb-3">
              Order and pay how you'd like
            </div>

            <div>
              Use cash, credit/debit card or save some time and pay right
              through the app. You'll collect Stars all ways.
              <span className="text-green-700 underline">Learn how </span>
            </div>
          </div>
        </div>
        <div
          className="
          text-left
          md:text-center
          items-center
          p-4
          justify-around
          space-x-7
          flex flex-row
          md:flex-col
        "
        >
          <div
            className="
            border-2
            w-12
            h-12
            rounded-full
            border-green-800
            text-green-700
            p-auto
            flex
            justify-center
            items-center
            mb-6
            flex-shrink-0
          "
          >
            3
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold mb-3">
              Earn Stars, get Rewards
            </div>

            <div>
              As you earn Stars, you can redeem them for Rewards-like free food,
              drinks, and more. Start redeeming with as little as 25 Stars!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uppermid;
