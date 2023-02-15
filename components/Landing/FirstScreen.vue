<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-6 md:gap-2 p-4 sm:p-12 mt-6 md:mt-0"
  >
    <div
      class="flex flex-col justify-center items-center sm:items-start gap-2 px-4 sm:px-12"
    >
      <p
        class="flex flex-row gap-2 items-center font-bold text-sm text-orange-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"
          />
        </svg>
        Talk with strangers!
      </p>
      <h1
        class="text-[2em] sm:text-[3em] font-bold leading-tight text-center sm:text-left"
      >
        Chat with random strangers
      </h1>

      <p class="w-full xl:w-[70%] text-center sm:text-left text-sm">
        Fuzz Talk is a great way to meet new people. When you use Fuzz Talk, you
        get paired with another person on the same network to talk one on one.
        If you prefer, you can use the interests option to get paired with the
        same people that have the same interests as you.
        <a href="#" class="underline px-2">See More</a>
      </p>
    </div>

    <div
      class="max-h-[300px] md:max-h-fit p-6 bg-gradient-to-br from-[#080441] to-black shadow-xl rounded-xl"
    >
      <img
        src="https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="person-using-laptop"
        class="h-full object-cover md:object-cover rounded-xl"
      />
    </div>
  </div>
</template>
