<script setup>
import { useVueFuse } from "vue-fuse";

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const isModalOpen = ref(false);
const selectedUser = ref("");

const allUsers = await supabase
  .from("users")
  .select("name, id")
  .neq("id", user.value.id);

const { search, results, noResults } = useVueFuse(allUsers.data, {
  keys: ["name"],
});

function openChatModalForSpecificUser(userID) {
  isModalOpen.value = true;
  selectedUser.value = userID;
}

function submitHandler(values) {
  console.log(values.message);
}

function navigateBack() {
  window.history.back();
}
</script>

<template>
  <div>
    <!-- Modal -->
    <!-- Main modal -->
    <div
      v-if="isModalOpen"
      tabindex="-1"
      class="flex items-center justify-center fixed top-0 left-0 right-0 z-50 w-full h-full p-4 overflow-x-hidden overflow-y-auto bg-black bg-opacity-30 backdrop-blur-sm"
    >
      <div class="relative w-full h-fit max-w-2xl">
        <!-- Modal content -->
        <div class="relative rounded-lg shadow bg-[#190a40]">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ selectedUser }}
            </h3>
            <button
              type="button"
              @click="isModalOpen = false"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <FormKit
              type="form"
              :actions="false"
              #default="{ value }"
              @submit="submitHandler"
              :config="{ validationVisibility: 'submit' }"
            >
              <FormKit
                type="text"
                name="message"
                label="Your message"
                placeholder="Hey there! Hope you're having a nice day."
                help="Send a greeting message."
                validation="required"
                :validation-messages="{
                  required: 'Now we cannot send empty greetings, can we?',
                }"
                :classes="{
                  label: 'text-gray-300',
                  input:
                    'w-full p-2 text-sm border-2 border-gray-800 bg-gray-800 focus-within:border-blue-500 outline-none rounded',
                  help: 'text-sm text-gray-200',
                  message: 'text-[14px] text-red-600',
                  outer: 'flex flex-col gap-2',
                }"
              />

              <FormKit
                type="submit"
                label="Send"
                :classes="{
                  outer:
                    'w-fit px-4 py-2 mt-4 mx-auto text-white font-semibold bg-indigo-700 rounded cursor-pointer',
                }"
              />
            </FormKit>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <!--  -->
    <!--  -->

    <div class="w-full flex flex-row items-center gap-2">
      <div
        @click="navigateBack"
        title="Go Back"
        class="p-2 text-gray-700 hover:bg-gray-300 cursor-pointer rounded-full"
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
      <FormKit
        type="text"
        placeholder="Enter a user's name to get started.."
        v-model="search"
        :classes="{
          input:
            'w-full px-4 py-3 text-black text-sm border-2 border-gray-800 bg-white bg-opacity-90 focus-within:border-gray-500 outline-none rounded-xl',
          placeholder: 'text-white',
          outer: 'w-full',
        }"
      />
    </div>

    <div
      v-if="search == ''"
      class="my-12 text-sm text-gray-900 text-center py-3"
    >
      <div class="w-fit mx-auto text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 21q-.825 0-1.412-.587Q1 19.825 1 19V6q0-.825.588-1.412Q2.175 4 3 4h18q.825 0 1.413.588Q23 5.175 23 6v13q0 .825-.587 1.413Q21.825 21 21 21Zm0-2h18V6H3v13Zm5-2h8v-1H8Zm-3-3h2v-2H5Zm4 0h2v-2H9Zm4 0h2v-2h-2Zm4 0h2v-2h-2ZM5 10h2V8H5Zm4 0h2V8H9Zm4 0h2V8h-2Zm4 0h2V8h-2ZM3 19V6v13Z"
          />
        </svg>
      </div>
      <p class="font-medium">Type in a user's name to get started..</p>
    </div>

    <div
      v-if="noResults"
      class="max-w-md mx-auto my-12 text-sm text-gray-900 text-center py-3"
    >
      <div class="w-fit mx-auto text-gray-800 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M187.8 125.3a31.8 31.8 0 0 1-47.6 0a8 8 0 0 1 .6-11.3a8 8 0 0 1 11.3.7a16 16 0 0 0 23.8 0a8 8 0 0 1 11.3-.7a8 8 0 0 1 .6 11.3Zm-72 0a8 8 0 0 0-.6-11.3a8 8 0 0 0-11.3.7a16 16 0 0 1-23.8 0a8 8 0 0 0-11.3-.7a8 8 0 0 0-.6 11.3a31.8 31.8 0 0 0 47.6 0Zm43.2 52a56.3 56.3 0 0 0-62 0a8.1 8.1 0 0 0-2.2 11.1a8 8 0 0 0 11.1 2.3a39.8 39.8 0 0 1 44.2 0a8.1 8.1 0 0 0 11.1-2.3a8.1 8.1 0 0 0-2.2-11.1Zm65-129V104c0 35.8-9.7 69.5-27.2 95s-42.6 41-68.8 41s-50.7-14.5-68.8-41S32 139.8 32 104V48.3a16 16 0 0 1 21.8-14.9C67.8 38.9 96.2 48 128 48s60.2-9.1 74.2-14.6A16 16 0 0 1 224 48.3Zm-16 0C192.9 54.2 162.4 64 128 64s-64.9-9.8-80-15.7V104c0 32.6 8.7 63.1 24.4 86s34.8 34 55.6 34s40.5-12.1 55.6-34s24.4-53.4 24.4-86Z"
          />
        </svg>
      </div>
      <p class="py-2 font-medium">
        Could not find any users relating to that name.<br /><br />
        Stop stalking bro. Go to the gym. Get some weights on you. As Plato
        said, every man must explore what his limits are.
      </p>
    </div>

    <div class="p-2 my-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
      <!-- Single Component For Rerender | v-for -->
      <div
        v-for="item in results"
        class="flex flex-row items-center gap-3 p-4 bg-white text-black rounded-lg"
      >
        <div
          class="h-12 w-12 bg-gray-400 border-2 border-black rounded-full"
        ></div>
        <p>{{ item.name }}</p>

        <div
          @click="openChatModalForSpecificUser(item.name)"
          class="ml-auto text-gray-400 hover:text-gray-700 cursor-pointer"
        >
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
</template>
