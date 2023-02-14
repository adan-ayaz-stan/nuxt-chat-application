<script setup lang="ts">
useHead({
  title: "Register | Fuzz Chat",
});

definePageMeta({
  middleware: "user-auth",
});

const supabase = useSupabaseClient();

const submitted = ref(false);
const submitHandler = async (values: {
  email: string;
  password: string;
  name: string;
}) => {
  const { data, error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      data: {
        name: values.name,
      },
    },
  });

  if (error == null) {
    const checkIfUserExists = await supabase
      .from("users")
      .select("email")
      .eq("email", data.user?.email);

    if (checkIfUserExists.data?.length == 0 || checkIfUserExists.data == null) {
      const { error } = await supabase.from("users").insert({
        id: data.user?.id,
        name: values.name,
        email: values.email,
      });
    } else {
      console.log("This user already exists in the database.");
    }
    // Let's pretend this is an ajax request:
    submitted.value = true;
  } else {
    console.log("An error has occurred while signing up.");
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
        id="registration-example"
        :form-class="submitted ? 'hidden' : 'block flex flex-col gap-4'"
        @submit="submitHandler"
        :actions="false"
        #default="{ value }"
        :config="{ validationVisibility: 'submit' }"
      >
        <h1 class="text-3xl font-semibold text-center font-['Montserrat']">
          Register
        </h1>
        <hr />
        <FormKit
          type="text"
          name="name"
          label="Your name"
          placeholder="Big Chad"
          help="What do people call you?"
          validation="required"
          :classes="{
            label: 'text-gray-300',
            input:
              'w-full p-2 text-sm border-2 border-gray-800 bg-gray-800 focus-within:border-blue-500 outline-none rounded',
            help: 'text-sm text-gray-200',
            message: 'text-[14px] text-red-600',
          }"
        />
        <FormKit
          type="text"
          name="email"
          label="Your email"
          placeholder="jane@example.com"
          help="What email should we use?"
          validation="required|email"
          :classes="{
            label: 'text-gray-300',
            input:
              'w-full p-2 text-sm border-2 border-gray-800 bg-gray-800 focus-within:border-blue-500 outline-none rounded',
            help: 'text-sm text-gray-200',
            message: 'text-[14px] text-red-600',
          }"
        />
        <div class="double">
          <FormKit
            type="password"
            name="password"
            label="Password"
            validation="required|length:6|matches:/[a-zA-Z]/"
            :validation-messages="{
              matches: 'Please be sensible with your password.',
            }"
            placeholder="Your password"
            help="Choose a password"
            :classes="{
              label: 'text-gray-300',
              input:
                'w-full p-2 text-sm border-2 border-gray-800 bg-gray-800 focus-within:border-blue-500 outline-none rounded',
              help: 'text-sm text-gray-200',
              message: 'text-[14px] text-red-600',
            }"
          />
        </div>

        <FormKit
          type="submit"
          label="Register"
          :classes="{
            outer:
              'w-fit px-4 py-2 mx-auto text-white font-semibold bg-gray-900 rounded',
          }"
        />

        <NuxtLink to="/auth/login" class="text-sm text-center underline my-2"
          >Already have an account?</NuxtLink
        >
      </FormKit>
      <div v-if="submitted">
        <h2>Sign up successful!</h2>
        <p class="text-sm text-gray-600">
          Check your email for confirmation link.
        </p>
      </div>
    </div>
  </div>
</template>
