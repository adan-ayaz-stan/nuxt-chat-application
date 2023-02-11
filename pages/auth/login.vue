<script setup>
definePageMeta({
  middleware: "user-auth",
});

const router = useRouter();
const supabase = useSupabaseClient();

const submitted = ref(false);
const message = ref("");

const submitHandler = async (values) => {
  message.value = "";

  const { data, error } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });

  // Let's pretend this is an ajax request:
  if (error == null) {
    submitted.value = true;
    setTimeout(() => {
      router.push("/account");
    }, 1500);
  }

  if (error) {
    message.value = "The credidentials do not match (email/password).";
  }
};
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d043e] via-[#080443] to-[#541c38] text-white"
  >
    <div
      class="w-11/12 max-w-[25em] p-4 bg-white bg-opacity-20 backdrop-blur-50 rounded-xl shadow-xl"
    >
      <FormKit
        type="form"
        :form-class="submitted ? 'hidden' : 'block flex flex-col gap-4'"
        @submit="submitHandler"
        :actions="false"
        #default="{ value }"
        :config="{ validationVisibility: 'submit' }"
      >
        <h1 class="text-3xl font-bold text-center">Login</h1>
        <hr />
        <FormKit
          type="text"
          name="email"
          label="Your email"
          placeholder="jane@example.com"
          help="Enter your registered email."
          validation="required|email"
          :classes="{
            label: 'text-gray-300',
            input:
              'w-full p-2 border-2 border-gray-800 bg-gray-800 focus-within:border-blue-500 outline-none rounded',
            help: 'text-sm text-gray-200',
            message: 'text-[14px] text-red-600',
          }"
        />
        <div class="double">
          <FormKit
            type="password"
            name="password"
            label="Password"
            placeholder="Your password"
            help="Enter the password you chose while registering."
            validation="required"
            :classes="{
              label: 'text-gray-300',
              input:
                'w-full p-2 border-2 border-gray-800 bg-gray-800 focus-within:border-blue-500 outline-none rounded',
              help: 'text-sm text-gray-200',
              message: 'text-[14px] text-red-600',
            }"
          />
        </div>

        <FormKit
          type="submit"
          label="Login"
          :classes="{
            outer:
              'w-fit px-4 py-2 mx-auto text-white font-semibold bg-gray-900 rounded',
          }"
        />

        <p v-if="message != ''" class="text-sm text-red-500">{{ message }}</p>

        <NuxtLink to="/auth/register" class="text-sm text-center underline my-2"
          >Don't have an account?</NuxtLink
        >
      </FormKit>

      <div v-if="submitted">
        <p>Redirecting...</p>
      </div>
    </div>
  </div>
</template>
