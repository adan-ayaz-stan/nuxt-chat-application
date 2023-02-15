<script setup>
const { userObject, closeChat } = defineProps(["userObject", "closeChat"]);
</script>

<template>
  <div class="h-screen md:h-full flex flex-col">
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
      <div
        class="h-8 w-8 flex items-center justify-center border-2 border-black rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z"
          />
        </svg>
      </div>
      <p>{{ userObject.otherUserName }}</p>
    </div>

    <!-- Messages Box -->
    <ChatMessagesBox :userObject="userObject" />

    <!-- Message Sender -->
    <ChatMessageSender :userObject="userObject" />
  </div>
</template>
