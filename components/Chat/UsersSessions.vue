<script setup>
const isWindowOpen = ref(false);
const selectedUser = ref("");

const sampleData = [
  {
    name: "Camre Pao",
  },
  {
    name: "Joe Rogan",
  },
];

function openChatWindowForSpecificUser(userID) {
  isWindowOpen.value = true;
  selectedUser.value = userID;
}

function closeChatWindow() {
  selectedUser.value = "";
}
</script>

<template>
  <div class="flex flex-row h-full rounded-l-[1.3em]">
    <!-- CHAT SELECTION PORTION -->
    <div class="max-w-full md:max-w-sm h-full md:border-r-2">
      <h1
        class="pt-4 pb-2 text-xl text-black text-center font-medium font-['Montserrat']"
      >
        Latest Chats
      </h1>

      <div class="p-3 grid grid-cols-1 auto-rows-auto gap-3">
        <!-- Single Component -->

        <div
          v-for="item in sampleData"
          @click="openChatWindowForSpecificUser(item.name)"
          class="grid grid-cols-5 items-center gap-3 p-4 bg-white text-black rounded-lg cursor-pointer"
        >
          <div
            class="col-span-1 h-full bg-gray-400 border-2 border-black rounded-full"
          ></div>
          <div class="col-span-3 relative flex flex-col gap-1 py-1">
            <p>{{ item.name }}</p>
            <p class="text-sm truncate text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              iusto repellendus recusandae fugiat, voluptates sequi. Natus at
              doloribus sint, accusamus soluta impedit quis vero repudiandae
              corporis fugit tempora eligendi! Dolorum?
            </p>
          </div>

          <div class="ml-auto text-gray-400 hover:text-gray-700 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6 14h8v-2H6Zm0-3h12V9H6Zm0-3h12V6H6ZM2 22V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="selectedUser != ''"
      class="w-full h-full absolute md:relative top-0 left-0 bg-gray-200 md:block"
    >
      <ChatWindow :userID="selectedUser" :closeChat="closeChatWindow" />
    </div>

    <div
      v-if="selectedUser == ''"
      class="w-full h-full hidden md:flex flex-col items-center justify-center"
    >
      <div class="text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12h3m6-9v3M7.8 7.8L5.6 5.6m10.6 2.2l2.2-2.2M7.8 16.2l-2.2 2.2M12 12l9 3l-4 2l-2 4l-3-9"
          />
        </svg>
      </div>
      <h1 class="text-gray-800">Select a user to get started.</h1>
    </div>
  </div>
</template>
