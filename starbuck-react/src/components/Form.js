import React from 'react'

function Form() {
    return (
        <div>
            <div
      class="
        mt-20
        flex flex-col
        md:w-5/12
        justify-center
        mx-8
        md:m-auto
        md:mt-20
      "
    >
      <div class="text-2xl font-semibold mb-10">Star Codes</div>
      <div class="mb-8">
        Yesssss. You've got Stars in your hand. Enter your code here and we'll
        add Stars to your account.
      </div>

      <div class="mb-20 w-full">
        <input
          type="text"
          placeholder="Enter your Star code"
          class="
            w-full
            rounded-lg
            h-10
            border-2 border-black
            focus:outline-none
            focus:border-red-500
          "
        />
        <button
          class="
            focus:outline-none
            hover:bg-gray-200
            mt-7
            h-7
            float-right
            border-2 border-black
            rounded-xl
            w-20
          "
        >
          Submit
        </button>
      </div>

      <div>Have a receipt but don't have a code?</div>
      <div>
        Go to
        <span class="text-green-700 underline">starbucks-stars.com</span> opens
        in new window to upload your receipt and collect your Stars.
      </div>

      <div class="text-2xl font-bold my-10">Questions</div>
      <div class="w-9/12">
        We want to help in any way we can. You can ask your barista anytime or
        we've answered the most commonly asked questions
        <span class="text-green-700 underline">right over here</span> opens in
        new window.
      </div>
    </div>

        </div>
    )
}

export default Form
