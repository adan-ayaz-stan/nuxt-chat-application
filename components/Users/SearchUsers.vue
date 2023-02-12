<script setup>
import { useVueFuse } from "vue-fuse";

const isModalOpen = ref(false);
const selectedUser = ref("");

const sampleData = [
  {
    name: "Joe Rogan",
  },
  {
    name: "Campre Bell",
  },
];
const { search, results, noResults } = useVueFuse(sampleData, {
  keys: ["name"],
});

function openChatModalForSpecificUser(userID) {
  isModalOpen.value = true;
  selectedUser.value = userID;
}

function submitHandler(values) {
  console.log(values.message);
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
    <FormKit
      type="text"
      placeholder="Enter a user's name to get started.."
      v-model="search"
      :classes="{
        input:
          'w-full px-4 py-3 text-black text-sm border-2 border-gray-800 bg-white bg-opacity-90 focus-within:border-gray-500 outline-none rounded-xl',
        placeholder: 'text-white',
      }"
    />

    <p v-if="search == ''" class="text-sm text-gray-900 text-center py-3">
      Type in a user name to get started..
    </p>

    <p v-if="noResults" class="text-sm text-gray-900 text-center py-3">
      Could not find any users relating to that name.
    </p>

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
