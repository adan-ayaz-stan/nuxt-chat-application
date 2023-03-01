<template>
  <div
    class="min-h-screen grid grid-cols-1 auto-rows-auto bg-white bg-gradient-to-br from-[#0d043e] via-[#080443] to-[#541c38] text-white"
  >
    <LandingNavbar />
    <LandingFirstScreen />
  </div>
</template>

<style scoped></style>

<script setup>
useHead({
  title: "Fuzz Chat",
});
</script>
