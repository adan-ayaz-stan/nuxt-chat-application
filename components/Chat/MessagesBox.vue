<script setup>
const sampleData = [
  {
    sender: "me",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos etco mmodi officiis consequatur voluptas, dolorum animi? Autem delenitirepellendus veniam temporibus. Enim earum suscipit, doloribus velit iusto minima eos in.",
  },
  {
    sender: "me",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos etco mmodi officiis consequatur voluptas, dolorum animi? Autem delenitirepellendus veniam temporibus. Enim earum suscipit, doloribus velit iusto minima eos in.",
  },
  {
    sender: "you",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos etco mmodi officiis consequatur voluptas, dolorum animi? Autem delenitirepellendus veniam temporibus. Enim earum suscipit, doloribus velit iusto minima eos in.",
  },
  {
    sender: "you",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos etco mmodi officiis consequatur voluptas, dolorum animi? Autem delenitirepellendus veniam temporibus. Enim earum suscipit, doloribus velit iusto minima eos in.",
  },
  {
    sender: "me",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    sender: "you",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos etco mmodi officiis consequatur voluptas, dolorum animi?",
  },
  {
    sender: "you",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos etco mmodi officiis consequatur voluptas, dolorum animi?",
  },
  {
    sender: "me",
    message:
      "Autem delenitirepellendus veniam temporibus. Enim earum suscipit, doloribus velit iusto minima eos in.",
  },
];
</script>

<template>
  <div
    class="h-full p-2 flex flex-col gap-2 bg-transparent backdrop-blur-xl overflow-scroll"
  >
    <!-- Single Component for Message -->
    <div
      v-for="item in sampleData"
      :class="`w-[90%] grid grid-cols-12 px-4 py-2 items-center text-gray-900 text-sm bg-white rounded ${
        item.sender == 'me' ? 'mr-auto' : 'ml-auto'
      }`"
    >
      <div
        :class="`col-span-2 md:col-span-1 h-full flex items-center justify-center + ${
          item.sender == 'me' ? 'order-0' : 'order-2'
        }`"
      >
        <div class="w-12 h-12 border-black border-2 rounded-full"></div>
      </div>
      <p class="col-span-10 md:col-span-11 order-1 font-medium text-gray-800">
        {{ item.message }}
      </p>
    </div>
  </div>
</template>
