<template>
  <a href="#" class="relative block w-24 h-24 rounded-lg overflow-hidden shadow-xl transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
    <div class="absolute inset-0 bg-center bg-cover" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
    <div class="absolute bottom-0 left-0 right-0 flex items-center justify-center px-4 py-2 text-white font-bold text-center bg-black bg-opacity-40 overflow-hidden">
      <span ref="label">{{ label }}</span>
    </div>
  </a>
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
      
      // Reset font size to default
      labelSpan.style.fontSize = '';
      
      // Check if the label overflows the container
      if (labelSpan.offsetWidth > container.offsetWidth) {
        // Decrease font size until the text fits
        let fontSize = 16; // starting font size
        while (labelSpan.offsetWidth > container.offsetWidth && fontSize > 8) {
          fontSize--;
          labelSpan.style.fontSize = `${fontSize}px`;
        }
      }
    },
  },
};
</script>
