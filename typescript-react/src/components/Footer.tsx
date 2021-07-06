import React from "react";

function Footer() {
  return (
    <div>
      <div className="border-b-2 border-gray-200 mb-12"></div>

      <div className="mb-10 mx-10 flex flex-row items-end justify-between lg:hidden">
        <div className="text-xl font-semibold">About Us</div>
        <div className="hover:bg-background hover:rounded-xl">
          <img
            className="inline"
            src="https://img.icons8.com/android/24/000000/expand-arrow.png"
          />
        </div>
      </div>
      <div className="mb-10 mx-10 flex flex-row items-end justify-between lg:hidden">
        <div className="text-xl font-semibold">Careers</div>
        <div className="hover:bg-background hover:rounded-xl">
          <img
            className="inline"
            src="https://img.icons8.com/android/24/000000/expand-arrow.png"
          />
        </div>
      </div>
      <div className="mb-10 mx-10 flex flex-row items-end justify-between lg:hidden">
        <div className="text-xl font-semibold">Social Impact</div>
        <div className="hover:bg-background hover:rounded-xl">
          <img
            className="inline"
            src="https://img.icons8.com/android/24/000000/expand-arrow.png"
          />
        </div>
      </div>
      <div className="mb-10 mx-10 flex flex-row items-end justify-between lg:hidden">
        <div className="text-xl font-semibold">For Business Partners</div>
        <div className="hover:bg-background hover:rounded-xl">
          <img
            className="inline"
            src="https://img.icons8.com/android/24/000000/expand-arrow.png"
          />
        </div>
      </div>
      <div className="mb-10 mx-10 flex flex-row items-end justify-between lg:hidden">
        <div className="text-xl font-semibold">Order and Pickup</div>
        <div className="hover:bg-background hover:rounded-xl">
          <img
            className="inline"
            src="https://img.icons8.com/android/24/000000/expand-arrow.png"
          />
        </div>
      </div>
      <div className="hidden lg:flex flex-row justify-start ml-10">
        <div className="flex flex-col w-44 mr-10">
          <div className="font-medium text-xl mb-9">About Us</div>
          <div className="text-gray-500 grid grid-cols-1 gap-4 hover:text-gray-700">
            <div>Our Heritage</div>
            <div>Our Coffee</div>
            <div>Stories and News</div>
            <div>Investor Relations</div>
            <div>Policies and Standards</div>
            <div>Customer Service</div>
          </div>
        </div>

        <div className="flex flex-col w-44 mr-10">
          <div className="font-medium text-xl mb-9">Careers</div>
          <div className="text-gray-500 grid grid-cols-1 gap-4 hover:text-gray-700">
            <div>Culture and Values</div>
            <div>Inclusion, Diversity, and Equity</div>
            <div>College Achievement Plan</div>
            <div>U.S. Careers</div>
            <div>International Careers</div>
          </div>
        </div>
        <div className="flex flex-col w-44 mr-10">
          <div className="font-medium text-xl mb-9">Social Impact</div>
          <div className="text-gray-500 grid grid-cols-1 gap-4 hover:text-gray-700">
            <div>Ethical Sourcing</div>
            <div>Leading in Sustainability</div>
            <div>Strengthening Communities</div>
            <div>Creating Opportunities</div>
            <div>Global Social Impact Report</div>
          </div>
        </div>

        <div className="flex flex-col w-44 mr-10">
          <div className="font-medium text-xl mb-9">For Business Partners</div>
          <div className="text-gray-500 grid grid-cols-1 gap-4 hover:text-gray-700">
            <div>Landlord Support Center</div>
            <div>Suppliers</div>
            <div>Corporate Gift Card Sales</div>
            <div>Office and Foodservice Coffee</div>
          </div>
        </div>
        <div className="flex flex-col w-44 mr-10">
          <div className="font-medium text-xl mb-9">Order and Pickup</div>
          <div className="text-gray-500 grid grid-cols-1 gap-4 hover:text-gray-700">
            <div>Order on the App</div>
            <div>Order on the Web</div>
            <div>Delivery</div>
            <div>Order and Pickup Options</div>
            <div>Explore and Find Coffee for Home</div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-200 my-10"></div>
      <div className="flex flex-col justify-start ml-10">
        <div className="flex justify-start flex-row space-x-8">
          <div>
            <img src="https://img.icons8.com/metro/32/000000/spotify.png" />
          </div>
          <div>
            <img src="https://img.icons8.com/metro/32/000000/facebook-new--v2.png" />
          </div>
          <div>
            <img src="https://img.icons8.com/metro/32/000000/pinterest.png" />
          </div>
          <div>
            <img src="https://img.icons8.com/fluent-systems-filled/32/000000/instagram-new.png" />
          </div>
          <div>
            <img src="https://img.icons8.com/material-sharp/32/000000/youtube-play.png" />
          </div>
          <div>
            <img src="https://img.icons8.com/metro/26/000000/twitter.png" />
          </div>
        </div>
        <div className="flex justify-start flex-col md:flex-row mt-5">
          <div className="hover:underline mb-3">
            Privacy Policy
            <span className="hidden lg:inline lg:text-gray-800 py-2 lg:px-6 font-bold">
              |
            </span>
          </div>
          <div className="hover:underline mb-3">
            Terms of Use
            <span className="hidden lg:inline lg:text-gray-800 py-2 lg:px-6 font-bold">
              |
            </span>
          </div>
          <div className="hover:underline mb-3">
            CA Supply Chain Act
            <span className="hidden lg:inline lg:text-gray-800 py-2 lg:px-6 font-bold">
              |
            </span>
          </div>
          <div className="hover:underline mb-3">
            Submit Your Idea
            <span className="hidden lg:inline lg:text-gray-800 py-2 lg:px-6 font-bold">
              |
            </span>
          </div>
          <div className="hover:underline mb-3">Cookie Preferences</div>
        </div>
        <div className="text-gray-500 text-sm my-4">
          2021 Starbucks Coffee Company. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
