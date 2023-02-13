<script setup lang="ts">
import { UserConversationSession } from "~~/types/ConversationSessions";

const supabase = useSupabaseClient();
const user = useSupabaseUser();

// async function getConversationSessions() {
//   // Getting Sessions || This took me a lot of time to get it right, you better be grateful for this
//   const { data, error } = await supabase
//     .from("conversation_sessions")
//     .select(
//       "id, user1_id, user2_id, users AS usersU1:user1_id(name), users AS usersU2:user2_id(name)"
//     );

//   const formatData = data?.map((ele: UserConversationSession, ind: number) => {
//     const sessionID = ele.id;
//     const otherUserID =
//       ele.user1_id == user.value?.id ? ele.user2_id : ele.user1_id;
//     const otherUserName =
//       ele.user1_id == user.value?.id
//         ? ele.usersASusersU2.name
//         : ele.usersASusersU1.name;

//     return { sessionID, otherUserID, otherUserName };
//   });

//   return formatData;
// }

// const samplData = await getConversationSessions().then((ele) => ele);
// console.log(samplData);

const isWindowOpen = ref(false);
const selectedUser = ref("");

const sampleData = [
  {
    sessionID: "41864323413",
    otherUserID: "153484646",
    otherUserName: "Sample Name",
  },
];

function openChatWindowForSpecificUser(userObject) {
  isWindowOpen.value = true;
  selectedUser.value = userObject;
}

function closeChatWindow() {
  selectedUser.value = "";
}

function navigateBack() {
  window.history.back();
}
</script>

<template>
  <div
    class="flex flex-row h-full rounded-l-[1.3em] border-gray-300 border-l-4"
  >
    <!-- CHAT SELECTION PORTION -->
    <div class="relative max-w-full md:max-w-sm h-full md:border-r-2">
      <!-- Top Bar -->
      <div class="flex flex-row justify-between items-center px-4 pt-3 pb-1">
        <!-- Back Icon -->
        <div
          @click="navigateBack()"
          title="Navigate Back"
          class="p-1 text-gray-100 rounded-full hover:bg-gray-600 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2H7.825l5.6 5.6Z"
            />
          </svg>
        </div>
        <!-- Heading -->
        <h1 class="text-xl text-center font-medium font-['Montserrat']">
          Latest Chats
        </h1>

        <!-- Refresh Chats Icon -->
        <div
          title="Refresh"
          class="p-1 text-gray-100 rounded-full hover:bg-gray-600 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 20q-3.35 0-5.675-2.325Q4 15.35 4 12q0-3.35 2.325-5.675Q8.65 4 12 4q1.725 0 3.3.713q1.575.712 2.7 2.037V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2Q13.625 6 12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325Q14.75 20 12 20Z"
            />
          </svg>
        </div>
      </div>

      <div class="p-3 grid grid-cols-1 auto-rows-auto gap-3">
        <!-- Single Component -->

        <div
          v-for="item in sampleData"
          @click="openChatWindowForSpecificUser(item)"
          class="h-fit grid grid-cols-5 items-center gap-3 p-4 bg-white text-black rounded-lg cursor-pointer"
        >
          <div
            class="col-span-1 h-full bg-gray-400 border-2 border-black rounded-full"
          ></div>
          <div class="col-span-3 relative flex flex-col gap-1 py-1">
            <p>{{ item.otherUserName }}</p>
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
      class="w-full h-full absolute md:relative top-0 left-0 md:rounded-r-[1.3em] md:block"
    >
      <ChatWindow :userObject="selectedUser" :closeChat="closeChatWindow" />
    </div>

    <div
      v-if="selectedUser == ''"
      class="w-full h-full hidden md:flex flex-col items-center justify-center"
    >
      <div class="text-gray-200">
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
      <h1 class="text-gray-200">Select a user to get started.</h1>
    </div>
  </div>
</template>
