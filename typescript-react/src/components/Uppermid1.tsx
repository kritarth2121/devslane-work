import React, { useState } from "react";
import Carousel1 from "./Carousel1";
import { Transition } from "@headlessui/react";
function Uppermid1() {
  let arr=[25,50,100,200,400];
  const [position,setposition]=useState(0);
let tabwidth=(1/arr.length)*100;
console.log(tabwidth,position);
let car= [{"title":"Customize your drink","description":"Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup." ,"url":"https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png"},
{"title":"Brewed hot coffee, bakery item or hot tea","description":"Pair coffee cake or an almond croissant with your fresh cup of hot brew." ,"url":"https://www.starbucks.com/weblx/images/rewards/reward-tiers/050.png"},
{"title":"Handcrafted drink, hot breakfast or parfait","description":"Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink." ,"url":"https://www.starbucks.com/weblx/images/rewards/reward-tiers/150.png"},
{"title":"Salad, sandwich or protein box","description":"Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box." ,"url":"https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png"},
{"title":"Select merchandise or at-home coffee","description":"Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box." ,"url":"https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png"},
] 
  return (
    <>
    <div className="w-full bg-green-50 flex flex-col justify-center items-center">
      <div className="text-3xl font-semibold mt-20 mb-10">
        Get your favorites for free
      </div>
<div className="relative">
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
        
        {arr.map((e,index)=>
        <Transition
        show={true}
         enter=" transition-opacity duration-1000"
         enterFrom=" opacity-0"
         enterTo="opacity-100"
         leave="duration-300"
         leaveFrom="opacity-100"
         leaveTo="opacity-0">
        <div onClick={()=>setposition(index)} className=" cursor-pointer text-center w-20">
          {e} <span className="text-yellow-600 text-base">&#9733;</span>
        </div></Transition>``)}
        
      </div>
      <div className="absolute ease-in-out duration-1000 h-1 bg-green-900" style={{width:tabwidth+"%",left:position*tabwidth+"%" }}></div>
      </div>
    </div>
{    
<Carousel1 title={car[position].title} description ={car[position].description} url={car[position].url} /> 
}</>
  );
}

export default Uppermid1;
