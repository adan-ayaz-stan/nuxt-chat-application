// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', '@formkit/nuxt'],
    css: ['~/assets/css/main.css','aos/dist/aos.css']
})
