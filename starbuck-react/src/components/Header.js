import React from 'react'

function Header() {
    return (
        <div class="w-full lg:h-large bg-lightgreen pt-36 flex flex-row h-auto">
        <div class="float-left ml-12 mt-40 w-96 text-black">
          <div class="block font-medium text-4xl">
            FREE COFFEE <br />IS A TAP AWAY
          </div>
          <div class="mt-5">Join now to start earning Rewards.</div>
          <div
            class="
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
          Or <span class="underline">join in the app</span> for the best
          experience
        </div>
  
        <div
          class="
            hidden
            overflow-hidden
            lg:block
            absolute
            w-large
            -right-72
            float-right
            place-content-end
          "
        >
          <img class="object-cover" src="https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png" />
        </div>
        <div
          class="
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
    )
}

export default Header
