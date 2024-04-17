<template>
  <div class="flex justify-center">
    <a href="#" class="relative block w-24 h-24 rounded-lg overflow-hidden shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl mx-auto">
      <div class="absolute inset-0 bg-center bg-cover transition-opacity duration-300" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
      <div class="absolute bottom-0 left-0 right-0 flex items-center justify-center px-4 py-2 text-white font-bold text-center bg-black bg-opacity-40 transition-opacity duration-300">
        <span ref="label" class="whitespace-normal">{{ label }}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HeaderTag',
  props: {
    image: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.resizeText();
  },
  methods: {
    resizeText() {
      const labelSpan = this.$refs.label;
      const container = labelSpan.parentNode;
      
      labelSpan.style.fontSize = '';
      
      if (labelSpan.offsetWidth > container.offsetWidth) {
        let fontSize = 16;
        while (labelSpan.offsetWidth > container.offsetWidth && fontSize > 8) {
          fontSize--;
          labelSpan.style.fontSize = `${fontSize}px`;
        }
      }
    },
  },
};
</script>
