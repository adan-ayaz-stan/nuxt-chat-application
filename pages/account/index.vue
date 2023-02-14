<script setup>
const user = useSupabaseUser();

definePageMeta({
  middleware: "user-auth",
});

useHead({
  title: `Account | ${user.value.user_metadata.name}`,
});

console.log();
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-[#0d043e] via-[#080443] to-[#541c38] text-white"
  >
    <UISidebar>
      <AccountProfileCard />
    </UISidebar>
  </div>
</template>
