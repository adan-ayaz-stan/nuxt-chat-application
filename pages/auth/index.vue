<script setup>
const supabase = useSupabaseClient();

const submitted = ref(false);
const submitHandler = async (value) => {
  console.log(value);

  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000));
  submitted.value = true;
};
</script>

<template>
  <div class="min-h-screen bg-[#2448b1] flex items-center justify-center">
    <div
      class="w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:4-12 p-4 bg-white rounded-xl shadow-xl"
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
        <h1 class="text-3xl font-bold text-center">Register!</h1>
        <p class="text-sm text-gray-600">
          You can put any type of element inside a form, not just FormKit inputs
          (although only FormKit inputs are included with the submission).
        </p>
        <hr />
        <FormKit
          type="text"
          name="name"
          label="Your name"
          placeholder="Jane Doe"
          help="What do people call you?"
          validation="required"
          :classes="{
            label: 'text-gray-800',
            input:
              'w-full p-2 border-2 focus-within:border-blue-500 outline-none rounded',
            help: 'text-sm  text-gray-600',
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
            validation="required|length:6|matches:/[^a-zA-Z]/"
            :validation-messages="{
              matches: 'Please include at least one symbol',
            }"
            placeholder="Your password"
            help="Choose a password"
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
          label="Register"
          :classes="{
            outer:
              'w-fit px-4 py-2 mx-auto text-white font-semibold bg-blue-500 rounded',
          }"
        />
      </FormKit>
      <div v-if="submitted">
        <h2>Submission successful!</h2>
      </div>
    </div>
  </div>
</template>
