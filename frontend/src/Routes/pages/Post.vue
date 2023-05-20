<template>
  <div class="flex justify-center items-center b-20">
    <div class="w-full max-w-sm p-8">
      <div class="shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 bg-[#331147]">
        <div class="mb-4">
          <ul class="flex border-b">
            <li
              class="-mb-px"
              :class="{'mr-1': activeTab === 'video'}"
              @click="activeTab = 'image'"
            >
              <a
                :class="{
                  'text-white font-bold py-2 px-4 border-b-2 border-indigo-500': activeTab === 'image',
                  'text-gray-500 py-2 px-4': activeTab !== 'image'
                }"
                href="#"
              >
                Image
              </a>
            </li>
            <li
              class="-mb-px"
              :class="{'ml-1': activeTab === 'image'}"
              @click="activeTab = 'video'"
            >
              <a
                :class="{
                  'text-white font-bold py-2 px-4 border-b-2 border-indigo-500': activeTab === 'video',
                  'text-gray-500 py-2 px-4': activeTab !== 'video'
                }"
                href="#"
              >
                Video
              </a>
            </li>
          </ul>
        </div>
        <div v-if="activeTab === 'image'">
          <label class="block font-bold mb-2 text-white" for="image">
            Image
          </label>
          <div class="relative">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="file"
              accept="image/*"
              v-on:change="handleImageUpload"
            />
            <div class="absolute right-0 top-0 mt-2 mr-3">
              <svg
                class="h-6 w-6 text-gray-500 hover:text-indigo-500 cursor-pointer"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
          </div>
          <div v-if="selectedImage">
            <img class="h-20 mt-4" :src="selectedImage.url" :alt="selectedImage.name" />
            <p class="text-white text-sm">{{ selectedImage.name }}</p>
          </div>
        </div>
        <div v-if="activeTab === 'video'">
          <label class="block font-bold mb-2 text-white" for="video">
            Video
          </label>
          <div class="relative">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="video"
              type="file"
              accept="video/*"
              v-on:change="handleVideoUpload"
            />
            <div class="absolute right-0 top-0 mt-2 mr-3">
              <svg
                class="h-6 w-6 text-gray-500 hover:text-indigo-500 cursor-pointer"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center mt-4">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            @click.prevent="submit"
          >
            Post
          </button>
        </div>
      </div>
      <p class="text-center text-gray-500 text-xs">
        &copy;2023 Beep Beep AmiAmi rights.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'image',
      selectedImage: null,
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.selectedImage = {
        name: file.name,
        url: URL.createObjectURL(file),
      };
    },
    handleVideoUpload(event) {
      const file = event.target.files[0];
      // Logic to handle video upload
    },
    submit() {
      // Logic for submitting the form
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
}

a {
  text-decoration: none;
}

a:hover {
  color: #4f46e5;
}
</style>
