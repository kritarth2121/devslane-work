import React from "react";

function Lowermid() {
  return (
    <div>
      <div class="bg-money flex text-center items-center flex-col w-full">
        <div class="text-2xl font-bold mt-10">Cash or card, you earn Stars</div>
        <div class="w-6/12 mt-8 mb-20">
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </div>

        <div class="flex flex-col text-left ml-9">
          <div class="flex flex-col md:flex-row justify-start">
            <div class="w-60 mb-8">
              <div class="text-xl font-medium">
                1
                <img
                  class="h-3 w-3 inline"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Five_Pointed_Star_Solid.svg/1087px-Five_Pointed_Star_Solid.svg.png"
                />
                per dollar
              </div>
              <div>Pay as you go</div>
            </div>
            <div class="flex flex-row md:w-4/12">
              <div>
                <img class="w-28" src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" />
              </div>
              <div class="ml-6">
                <div class="text-xl font-medium mb-5">
                  Scan and pay separately
                </div>
                <div>Use cash or credit/debit card at the register.</div>
              </div>
            </div>
            <div class="flex flex-row md:w-4/12">
              <div>
                <img class="md:w-96" src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" />
              </div>
              <div class="ml-6">
                <div class="text-xl font-medium mb-5">
                  Save payment in the app
                </div>
                <div>
                  Check-out faster by saving a credit/debit card or PayPal to
                  your account. You'll be able to order ahead or scan and pay at
                  the register in one step.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-b-2 w-11/12 border-gray-200 mb-12"></div>

        <div class="flex flex-col text-left ml-9">
          <div class="flex flex-col md:flex-row justify-start">
            <div class="w-60 mb-8">
              <div class="text-xl font-medium">
                2
                <img
                  class="h-3 w-3 inline"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Five_Pointed_Star_Solid.svg/1087px-Five_Pointed_Star_Solid.svg.png"
                />
                per dollar
              </div>
              <div>Add funds in the app</div>
            </div>
            <div class="flex flex-row md:w-4/12">
              <div>
                <img
                  class="w-96"
                  src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png"
                />
              </div>
              <div class="ml-6 my-6">
                <div class="text-xl font-medium mb-5">Preload</div>
                <div>
                  To save time and earn Stars twice as fast, add money to your
                  digital Starbucks Card using any payment option. Scan and pay
                  in one step or order ahead in the app.
                </div>
              </div>
            </div>
            <div class="flex flex-row md:w-4/12">
              <div>
                <img
                  class="w-60"
                  src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png"
                />
              </div>
              <div class="ml-6">
                <div class="text-xl font-medium mb-5">
                  Register your gift card
                </div>
                <div>
                  Then use it to pay through the app. You can even consolidate
                  balances from multiple cards in one place.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-b-2 w-11/12 border-gray-200 mb-12"></div>
        <div class="flex flex-col text-left ml-9">
          <div class="flex flex-col md:flex-row justify-start mb-20">
            <div class="w-60 mb-10">
              <div class="text-xl font-medium">
                Up to 3
                <img
                  class="h-3 w-3 inline"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Five_Pointed_Star_Solid.svg/1087px-Five_Pointed_Star_Solid.svg.png"
                />
                per dollar
              </div>
              <div>With Starbucks Rewards Visa Card</div>
            </div>
            <div class="flex flex-row md:w-4/12">
              <div>
                <img
                  class="w-96"
                  src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/3A.png"
                />
              </div>
              <div class="ml-6">
                <div class="text-xl font-medium mb-5">
                  Earn Stars even faster
                </div>
                <div>
                  Earn Stars on all purchases you make with our
                  <span class="text-green-700 underline"> credit card</span>
                  opens in new window in and outside of Starbucks. Earn 1 Star
                  per $1 when you digitally preload your Starbucks Card with
                  your Starbucks Rewards Visa Card, and earn 2 Stars per $1 when
                  you pay with that preloaded Starbucks Card.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lowermid;
