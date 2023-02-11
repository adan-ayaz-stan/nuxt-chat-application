export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();

  // Function run on server side to check user session
  if (!user.value && to.path === "/account") {
    return navigateTo("/auth/login");
  } else if (user.value && to.path === "/") {
    return navigateTo("/account");
  } else if (user.value && to.path === "/auth/register") {
    return navigateTo("/account");
  } else if (user.value && to.path === "/auth/login") {
    return navigateTo('/account')
  }
});
