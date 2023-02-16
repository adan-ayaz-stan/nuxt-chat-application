<script setup>
const { userObject } = defineProps(["userObject"]);

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const inputMessage = ref("");

async function submitHandler(event) {
  //  Get the message value
  const message = inputMessage.value;
  // Reset the message bar
  inputMessage.value = "";

  // Resetting the message bar first because we don't want the user to wait for the message to go

  // Add the message to the database
  const { error } = await supabase.from("messages").insert({
    message,
    receiver_id: userObject.otherUserID,
    sender_id: user.value.id,
    session_id: userObject.sessionID,
  });

  if (error == null) {
    // If sent successfully, update the session updated_at value of between the users
    console.log("Message sent successfully.");

    const date = new Date().toISOString();

    const { error } = await supabase
      .from("conversation_sessions")
      .update({
        updated_at: date,
      })
      .eq("id", userObject.sessionID);

    if (error == null) {
      console.log("Session updated successfully");
    }
  }
}
</script>

<template>
  <div class="bg-gray-900 md:rounded-br-[1.3em]">
    <form @submit.prevent="submitHandler" class="grid grid-cols-12 gap-2 p-2">
      <input
        v-model="inputMessage"
        name="chat-message"
        autocomplete="off"
        class="col-span-10 px-4 py-3 text-black text-sm bg-white bg-opacity-90 focus-within:border-gray-500 outline-none rounded-xl"
      />

      <button
        type="submit"
        class="col-span-2 flex items-center justify-center px-2 rounded-xl border-2 hover:bg-gray-800 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26l.001.002l4.995 3.178l3.178 4.995l.002.002l.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215l7.494-7.494l1.178-.471l-.47 1.178Z"
          />
        </svg>
      </button>
    </form>
  </div>
</template>
