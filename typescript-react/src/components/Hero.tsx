import React from "react";

function Hero() {
  return (
    <div>
      <div className="w-full lg:h-large bg-lightgreen pt-36 flex md:flex-row h-auto flex-col">
        <div className="float-left ml-12 md:mt-40 w-96 text-black">
          <div className="block font-medium text-4xl">
            FREE COFFEE <br />
            IS A TAP AWAY
          </div>
          <div className="mt-5">Join now to start earning Rewards.</div>
          <div
            className="
            w-24
            h-8
            ml-5
            mr-10
            bg-green-800
            hover:bg-gray-700
            text-white
            rounded-2xl
            text-center
            m-5
            pt-1

          "
          >
            Join Now
          </div>
          Or <span className="underline">join in the app</span> for the best
          experience
        </div>

        <div
          className="
          hidden
          overflow-hidden
          lg:block
          absolute
          w-large
          -right-72
          float-right
          place-content-end
          top-36
      
        "
        >
          <img
            className="object-cover"
            src="https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png"
          />
        </div>
        <div
          className="
          visible
          overflow-hidden
          lg:hidden
          relative
          bottom-full
          float-right
          mt-auto
        "
        >
          <img src="https://www.starbucks.com/weblx/images/rewards/hero/hero-mobile_2021.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
