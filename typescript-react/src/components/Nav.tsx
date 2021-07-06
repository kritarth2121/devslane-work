import React, { Fragment, useState } from "react";
import Subnav from "./Subnav";
import { Transition, Dialog } from "@headlessui/react";

interface props {}
const Nav: React.FC<props> = () => {
  const [open, setopen] = useState(false);
  const [isAnimating, setisAnimating] = useState(false);

  console.log(open);
  return (
    <>
      <div className=" md:fixed bg-white w-screen md:h-24 h-20  z-20">
        <img
          className="float-left my-3 mx-10 flex self-center md:hidden h-12 w-12 "
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
        />
        <button
          className="
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
          onClick={()=>{if(!isAnimating)
            {setopen(true)}}
          
          }
        >
          <svg
            viewBox="0 0 24 24"
            className="valign-middle absoluteCenter w-9 h-9 visible fill-current"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            focusable="false"
          >
            <path
              className="
              sb-hamburgerButton-middleLine-CLOSED sb-hamburgerButton-animation
            "
              d="M21,12.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,12.9,21,12.9z"
            ></path>
            <path
              className="
              sb-hamburgerButton-topLine-CLOSED
              sb-hamburgerButton-animation
              sb-hamburgerButton-animation-outer-lines
            "
              d="M21,6.9H3C2.5,6.9,2.1,6.5,2.1,6S2.5,5.1,3,5.1h18c0.5,0,0.9,0.4,0.9,0.9S21.5,6.9,21,6.9z"
            ></path>
            <path
              className="
              sb-hamburgerButton-bottomLine-CLOSED
              sb-hamburgerButton-animation
              sb-hamburgerButton-animation-outer-lines
            "
              d="M21,18.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,18.9,21,18.9z"
            ></path>
            <circle
              className="sb-icon-hover"
              fill="transparent"
              cx="50%"
              cy="50%"
              r="75%"
            ></circle>
          </svg>
        </button>

        <div className="hidden md:flex flex-row justify-between text-base">
          <div className="font-bold float-left flex flex-row h-24">
            <div className="ml-14 mt-5">
              <img
                className="h-12 w-12"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
              />
            </div>
            <div className="ml-5 mt-8 hover:text-green-800">MENU</div>
            <div
              className="
              ml-5
              mt-8
              h-
              border-b-8 border-green-800
              hover:text-green-800
            "
            >
              REWARDS
            </div>
            <div className="ml-5 mt-8 hover:text-green-800">GIFT CARDS</div>
          </div>

          <div
            className="
            float-right
            text-center
            items-center
            p-auto
            flex flex-row
            font-medium
          "
          >
            <div className="hover:text-green-800">
              <img
                className="inline"
                src="https://img.icons8.com/material-sharp/24/000000/marker.png"
              />
              Find a Store
            </div>

            <div className="w-20 h-8 ml-5 rounded-full border-2 border-black hover:bg-gray-100">
              Sign in
            </div>

            <div
              className="
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
      </div>
      <Transition.Root show={open} beforeLeave={()=>setisAnimating(true)} afterLeave={()=> setisAnimating(false)}>
        <Dialog open={open} onClose={setopen}>
          <Transition.Child
            enter="duration-300"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="duration-300"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="opacity-0 translate-x-full"
          >
            <Dialog.Overlay className="md:hidden fixed inset-0 top-20 z-20 bg-black opacity-25"></Dialog.Overlay>
            <div className="md:hidden border fixed flex flex-col right-0 items-center justify-items-center align-middle top-20 bottom-0 w-64 bg-white z-20">
              <button>menu</button>
              <button>Rewards</button>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};
Nav.defaultProps = {};
export default Nav;
