import React from "react";
import Subnav from "./Header";
function Nav() {
  return (
    <>
      <div class="fixed bg-white w-screen h-24 items-center z-20">
        <img
          class="float-left mx-10 my-2 md:hidden h-12 w-12"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
        />
        <button
          class="
          mx-10
          float-right
          inline-block
          md:hidden
          w-8
          my-5
          h-8
          p-1
          focus:outline-none
          border-0
        "
        >
          <svg
            viewBox="0 0 24 24"
            class="valign-middle absoluteCenter"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            focusable="false"
            class="w-9 h-9 visible fill-current"
          >
            <path
              class="
              sb-hamburgerButton-middleLine-CLOSED sb-hamburgerButton-animation
            "
              d="M21,12.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,12.9,21,12.9z"
            ></path>
            <path
              class="
              sb-hamburgerButton-topLine-CLOSED
              sb-hamburgerButton-animation
              sb-hamburgerButton-animation-outer-lines
            "
              d="M21,6.9H3C2.5,6.9,2.1,6.5,2.1,6S2.5,5.1,3,5.1h18c0.5,0,0.9,0.4,0.9,0.9S21.5,6.9,21,6.9z"
            ></path>
            <path
              class="
              sb-hamburgerButton-bottomLine-CLOSED
              sb-hamburgerButton-animation
              sb-hamburgerButton-animation-outer-lines
            "
              d="M21,18.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,18.9,21,18.9z"
            ></path>
            <circle
              class="sb-icon-hover"
              fill="transparent"
              cx="50%"
              cy="50%"
              r="75%"
            ></circle>
          </svg>
        </button>
        <div class="hidden md:flex flex-row justify-between text-base">
          <div class="font-bold float-left flex flex-row h-24">
            <div class="ml-14 mt-5">
              <img
                class="h-12 w-12"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
              />
            </div>
            <div class="ml-5 mt-8 hover:text-green-800">MENU</div>
            <div
              class="
              ml-5
              mt-8
              h-
              border-b-8 border-green-800
              hover:text-green-800
            "
            >
              REWARDS
            </div>
            <div class="ml-5 mt-8 hover:text-green-800">GIFT CARDS</div>
          </div>

          <div
            class="
            float-right
            text-center
            items-center
            p-auto
            flex flex-row
            font-medium
          "
          >
            <div class="hover:text-green-800">
              <img
                class="inline"
                src="https://img.icons8.com/material-sharp/24/000000/marker.png"
              />
              Find a Store
            </div>

            <div class="w-20 h-8 ml-5 rounded-xl border-2 border-black hover:bg-gray-100">
              Sign in
            </div>

            <div
              class="
              w-24
              h-8
              ml-5
              mr-10
              bg-black
              hover:bg-gray-700
              text-white
              rounded-2xl
              pt-1
            "
            >
              Join Now
            </div>
          </div>
        </div>
<Subnav/>
       
      </div>
    </>
  );
}
export default Nav;
