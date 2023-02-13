<script setup>
const { userObject, closeChat } = defineProps(["userObject", "closeChat"]);
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
    <div class="h-full bg-gray-800">Messages Box</div>

    <!-- Message Sender -->
    <ChatMessageSender />
  </div>
</template>
