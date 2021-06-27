import React from "react";

function Carousel1() {
  return (
    <div>
      <div
        class="
        bg-lightgreen
        md:text-left
        text-center
        items-center
        flex flex-col
        md:flex-row
        justify-center
      "
      >
        <div class="">
          <img
            class="h-60"
            src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png"
          />
        </div>
        <div class="md:w-3/12 mt-20 mb-20">
          <div class="text-2xl mb-10 font-semibold">Customize Your Drink</div>
          <div class="text-lg">
            Make your drink just right with an extra espresso shot, dairy
            substitute or a dash of your favorite syrup.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel1;
