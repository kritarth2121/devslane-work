import React from "react";

function Centermid() {
  return (
    <>
      <div
        className="
        mb-10
        flex flex-col
        text-center
        justify-items-center justify-center
        items-center
        mt-20
      "
      >
        <div className="text-2xl font-bold">Endless Extras</div>
        <div className="w-6/12">
          Joining Starbucks Rewards means unlocking access to exclusive
          benefits. Say hello to easy ordering, tasty Rewards and-yes, free
          coffee.
        </div>
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
            w-28
            h-28
            rounded-full
            p-auto
            flex
            justify-center
            items-center
            mb-6
            flex-shrink-0
          "
          >
            <img src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg" />
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold mb-3">Fun freebies</div>

            <div>
              Not only can you earn free coffee, look forward to a birthday
              treat plus coffee and tea refills.
            </div>
            <div className="mt-4 underline text-green-800">Learn More</div>
          </div>
        </div>
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
            w-28
            h-28
            rounded-full
            p-auto
            flex
            justify-center
            items-center
            mb-6
            flex-shrink-0
          "
          >
            <img src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" />
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold mb-3">Order & pay ahead</div>

            <div>
              Enjoy the convenience of in-store, curbside or drive-thru pickup
              at select stores.
            </div>
            <div className="mt-4 underline text-green-800">Learn More</div>
          </div>
        </div>
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
            w-28
            h-28
            rounded-full
            p-auto
            flex
            justify-center
            items-center
            mb-6
            flex-shrink-0
          "
          >
            <img src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" />
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold mb-3">Get to free faster</div>

            <div>
              Earn Stars even quicker with Bonus Star challenges, Double Star
              Days and exciting games.
            </div>
            <div className="mt-4 underline text-green-800">Learn More</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Centermid;
