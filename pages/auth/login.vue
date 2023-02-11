<script setup>
definePageMeta({
  middleware: "user-auth",
});

const supabase = useSupabaseClient();

const submitted = ref(false);
const submitHandler = async (values) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });

  // Let's pretend this is an ajax request:
  if (error == null) {
    navigateTo("/account");
  }
};
</script>

<template>
  <div class="min-h-screen bg-[#2448b1] flex items-center justify-center">
    <div class="w-11/12 max-w-[25em] p-4 bg-white rounded-xl shadow-xl">
      <FormKit
        type="form"
        id="registration-example"
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
            label: 'text-gray-800',
            input:
              'w-full p-2 border-2 focus-within:border-blue-500 outline-none rounded',
            help: 'text-sm  text-gray-600',
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
            :classes="{
              label: 'text-gray-800',
              input:
                'w-full p-2 border-2 focus-within:border-blue-500 outline-none rounded',
              help: 'text-sm  text-gray-600',
              message: 'text-[14px] text-red-600',
            }"
          />
        </div>

        <FormKit
          type="submit"
          label="Login"
          :classes="{
            outer:
              'w-fit px-4 py-2 mx-auto text-white font-semibold bg-blue-500 rounded',
          }"
        />
      </FormKit>
    </div>
  </div>
</template>
