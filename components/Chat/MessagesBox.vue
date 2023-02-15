<script setup>
const { userObject } = defineProps(["userObject"]);

const supabase = useSupabaseClient();
const user = useSupabaseUser();

// Chat container ref for scroll positions setting
const chatContainer = ref(null);

const loadingMessages = ref(true);
const messagesArray = ref([]);
const error = ref(false);

// Get the messages of the session that exists between the logged in user and the user for which the window is opened. We don't need to apply any extensive filters on the fetching messages as we are already storing messages with a session id which is their base origin

// The strategy I am applying here is first fetch the messages through a normal fetch request and set them up in the messagesArray.
async function getMessages() {
  const { data, error } = await supabase
    .from("messages")
    .select("message, receiver_id, sender_id")
    .eq("session_id", userObject.sessionID);

  if (error == null) {
    loadingMessages.value = false;
    messagesArray.value = data;
  } else {
    error.value = true;
  }
}

onMounted(() => {
  getMessages();
  // Setting up the subscription
  supabase
    .channel("any")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "messages" },
      (payload) => {
        console.log("Change received!", payload);
        // Adding the message to the existing array of messages
        messagesArray.value.push(payload.new);
      }
    )
    .subscribe();
});

// To keep the scroll position at bottom
onMounted(() => {
  chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
});
// When a new message appears
onUpdated(() => {
  chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
});
</script>

<template>
  <div
    ref="chatContainer"
    class="h-full p-2 flex flex-col gap-2 bg-transparent backdrop-blur-xl overflow-scroll"
    style="scrollbar-width: none"
  >
    <!-- Error Component -->
    <div v-if="error" class="p-4 text-sm text-white bg-gray-800 rounded-lg">
      <p class="text-center">
        An error has occurred while fetching the resources.
      </p>
    </div>

    <!-- Loading Component -->
    <div
      v-if="loadingMessages"
      class="mt-auto flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="0" fill="currentColor">
          <animate
            id="svgSpinnersPulse20"
            fill="freeze"
            attributeName="r"
            begin="0;svgSpinnersPulse21.begin+0.6s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            values="0;11"
          />
          <animate
            fill="freeze"
            attributeName="opacity"
            begin="0;svgSpinnersPulse21.begin+0.6s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            values="1;0"
          />
        </circle>
        <circle cx="12" cy="12" r="0" fill="currentColor">
          <animate
            id="svgSpinnersPulse21"
            fill="freeze"
            attributeName="r"
            begin="svgSpinnersPulse20.begin+0.6s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            values="0;11"
          />
          <animate
            fill="freeze"
            attributeName="opacity"
            begin="svgSpinnersPulse20.begin+0.6s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            values="1;0"
          />
        </circle>
      </svg>
    </div>

    <!-- Single Component for Message -->
    <div
      v-for="(item, ind) in messagesArray"
      :key="ind + 786"
      :class="`w-fit flex flex-row gap-2 px-2 md:px-4 py-1 items-center text-gray-900 text-sm bg-white rounded-xl ${
        item.sender_id == user.id ? 'ml-auto' : 'mr-auto'
      } ${item.sender_id == user.id ? 'justify-end' : 'justify-start'}`"
    >
      <div
        :class="`h-full flex items-center justify-center + ${
          item.sender_id == user.id ? 'order-2' : 'order-0'
        }`"
      >
        <div
          class="w-8 h-8 flex items-center justify-center border-black border-2 rounded-full"
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
      </div>
      <p class="order-1 font-medium text-gray-800">
        {{ item.message }}
      </p>
    </div>
  </div>
</template>
