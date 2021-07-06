import React from "react";

function About() {
  return (
    <div>
      <div
        className="
        bg-gray-200
        text-SM
        H-96
        flex
        md:flex-row
        justify-around
        my-20
        h-auto
        flex-col
        items-center
        p-5
      "
      >
        <div className="md:w-5/12">
          <div className="MT-10">
            At participating stores. Restrictions apply.
          </div>
          <div className="font-semibold my-5">EARNING STARS</div>
          Stars cannot be earned on purchases of alcohol, Starbucks Cards or
          Starbucks Card reloads. Earn 1 Star per $1 spent when you scan your
          member barcode in the app, then pay with cash, credit/debit cards or
          mobile wallets at participating stores. You can also earn 1 Star per
          $1 spent when you link a payment method and pay directly through the
          app. Earn 2 Stars per $1 spent when you load funds and pay with your
          digital Starbucks Card in the app. You can also earn 2 Stars per $1
          spent when you pay in-person at a participating store with your
          registered physical Starbucks Card or scan your member barcode in the
          app, and then use any physical Starbucks Card (regardless of whether
          it is registered) to complete the purchase.
          <div className="font-semibold my-5">BENEFITS</div>
          Free refills available during same in-store visit only. To qualify for
          the Birthday Reward, you must have made at least one Star-earning
          transaction.
        </div>
        <div className="md:w-5/12">
          <div className="font-semibold my-5">TERMS OF USE</div>
          For full program details visit starbucks.com/rewards/terms opens in
          new window. * Earn 1 Star per $1 when digitally loading your Starbucks
          Card with your Starbucks® Rewards Visa® Card: See your Card Rewards
          Program Agreement for more details. Starbucks® Rewards benefits are
          available at participating Starbucks stores. Not all stores have the
          ability to honor Rewards at this time. Visit the Starbucks Store
          Locator opens in new window and search for locations honoring “Redeem
          Rewards”. Deposit and credit card products provided by JPMorgan Chase
          Bank, N.A. Member FDIC
          <div className="font-semibold my-5">REDEEMING REWARDS</div>
          Rewards cannot be redeemed for alcoholic beverages or multi-serve
          items. Not all stores honor tiered Rewards. Select stores redeem 150
          Stars for free food or drink items only.
        </div>
      </div>
    </div>
  );
}

export default About;
