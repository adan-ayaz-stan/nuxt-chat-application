<script setup>
useHead({
  title: "Chat | Fuzz Chat",
});
definePageMeta({
  middleware: "user-auth",
});
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d043e] via-[#080443] to-[#541c38] text-white"
  >
    <div
      class="h-[90vh] w-[95vw] bg-white bg-opacity-20 border-white border-2 rounded-[1.5em]"
    >
      <div class="h-full w-[95%] ml-auto rounded-[1.3em] shadow-xl">
        <ChatUsersSessions />
      </div>
    </div>
  </div>
</template>
