<script setup>
function submitHandler(values) {
  console.log(values);
}
</script>

<template>
  <div class="bg-gray-900">
    <FormKit
      type="form"
      :form-class="'grid grid-cols-12 auto-rows-auto gap-2 p-2'"
      @submit="submitHandler"
      :actions="false"
      #default="{ value }"
      :config="{ validationVisibility: 'submit' }"
    >
      <FormKit
        name="chat-message"
        type="text"
        :classes="{
          input:
            'w-full px-4 py-3 text-black text-sm bg-white bg-opacity-90 focus-within:border-gray-500 outline-none rounded-xl',
          outer: 'col-span-10',
          placeholder: 'text-white',
        }"
      />

      <FormKit
        type="submit"
        :classes="{
          outer:
            'col-span-2 flex items-center justify-center px-2 rounded-xl border-2 hover:bg-gray-800 cursor-pointer',
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26l.001.002l4.995 3.178l3.178 4.995l.002.002l.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215l7.494-7.494l1.178-.471l-.47 1.178Z"
          />
        </svg>
      </FormKit>
    </FormKit>
  </div>
</template>
