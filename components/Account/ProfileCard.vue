<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
// Getting user metadata from auth of users in supabase
const map = user.value.user_metadata;
const shallowCopyObject = Object.assign({}, map);

async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error == null) {
    navigateTo("/");
  }
}
</script>

<template>
  <div
    class="w-full max-w-sm p-4 mx-auto md:mx-0 md:ml-auto bg-white bg-opacity-30 backdrop-blur-xl border border-gray-200 rounded-lg shadow"
  >
    <div class="flex flex-col items-center">
      <img
        class="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
        src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Bonnie image"
      />
      <h5 class="text-xl font-medium text-gray-900 dark:text-white">
        {{ shallowCopyObject.name }}
      </h5>
      <span class="text-sm text-gray-500 dark:text-gray-400">Rogue Power</span>
      <div class="flex mt-4 space-x-3 md:mt-6">
        <NuxtLink
          to="/chat"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
        >
          To chats
        </NuxtLink>
        <p
          @click="logout"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 cursor-pointer"
        >
          Log out
        </p>
      </div>
    </div>
  </div>
</template>
