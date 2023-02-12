export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();

  // Check for account page

  // Function run on server side to check user session
  if (!user.value && to.path == "/users") {
    // if user is not loggged in
    return navigateTo("/");
  } else if (!user.value && to.path == "/chat") {
    // if user is not loggged in
    return navigateTo("/");
  } else if (!user.value && to.path == "/account") {
    // if user is not loggged in
    return navigateTo("/");
  } else if (user.value && to.path === "/") {
    return navigateTo("/account");
  } else if (user.value && to.path === "/auth/register") {
    return navigateTo("/account");
  } else if (user.value && to.path === "/auth/login") {
    return navigateTo("/account");
  }
});
