<template>
  <div
    class="min-h-screen grid grid-cols-1 auto-rows-auto bg-white bg-gradient-to-br from-[#0d043e] via-[#080443] to-[#541c38] text-white"
  >
    <LandingNavbar />
    <LandingFirstScreen />

    <div class="h-[75vh] w-full absolute bottom-0 right-0">
      <img
        :src="keyboardImage"
        alt="person-using-laptop"
        class="absolute bottom-0 right-0 h-full object-cover md:object-cover rounded-xl opacity-40 mix-blend-multiply"
      />
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import keyboardImage from "@/assets/images/keyboard.png";

useHead({
  title: "Fuzz Chat",
});
</script>
