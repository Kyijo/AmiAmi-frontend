<template>
    <div class="mt-4">
        <label :for="name" class="block font-bold mb-2 text-white">
            <i class="fas fa-user inline-block h-4 w-4 mr-2"></i>
            {{ label }}
        </label>
        <input
          :type="type" 
          class="transition-all duration-300 ease-in-out shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent text-white placeholder-gray-300 focus:placeholder-gray-500"
          id="name"
          :placeholder="placeholder"
          :value="value"
          @input="$emit('update:value', $event.target.value)"
          :rules="['Required']"
        />
    </div>
</template>

<script>
export default {
  props: {
    label: String,
    name: String,
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
    value: String,
  },
};
</script>