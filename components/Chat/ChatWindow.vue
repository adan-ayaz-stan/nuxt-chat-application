<script setup>
const { userObject, closeChat } = defineProps(["userObject", "closeChat"]);

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
  <div class="h-full flex flex-col">
    <!-- Top Bar -->
    <div
      class="px-2 py-3 flex flex-row items-center gap-3 text-black bg-white rounded-tr-[1.3em]"
    >
      <!-- Back Button -->
      <div
        @click="closeChat()"
        class="p-2 hover:bg-gray-200 rounded-xl cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"
          />
        </svg>
      </div>

      <!-- User Details -->
      <div class="h-8 w-8 bg-gray-400 border-2 border-black rounded-full"></div>
      <p>{{ userObject.otherUserName }}</p>
    </div>

    <!-- Messages Box -->
    <div class="h-full p-2 flex flex-col gap-2 bg-gray-800 overflow-scroll">
      <!-- Single Component for Message -->
      <div
        v-for="item in sampleData"
        :class="`w-[90%] grid grid-cols-12 px-4 py-2 items-center text-gray-900 text-sm bg-white rounded ${
          item.sender == 'me' ? 'mr-auto' : 'ml-auto'
        }`"
      >
        <div
          :class="`col-span-2 h-full flex items-center justify-center + ${
            item.sender == 'me' ? 'order-0' : 'order-2'
          }`"
        >
          <div class="w-12 h-12 border-black border-2 rounded-full"></div>
        </div>
        <p class="col-span-10 order-1 font-medium text-gray-800">
          {{ item.message }}
        </p>
      </div>
    </div>

    <!-- Message Sender -->
    <ChatMessageSender />
  </div>
</template>
