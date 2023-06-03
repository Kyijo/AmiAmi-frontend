<template>
  <Header />
  <div class="flex items-center justify-center mt-10">
    <div>
      <div v-if="activeTab === 'image'">
        <div class="w-full max-w-md p-8 bg-[#331147] rounded-lg shadow-lg">
          <div>
            <div class="mb-4">
              <label class="block font-bold text-white" for="imageUpload"
                >Image Upload</label
              >
              <input
                class="hidden"
                id="imageUpload"
                type="file"
                accept="image/*"
                @change="handleImageUpload"
              />
              <label
                class="flex items-center justify-center w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                for="imageUpload"
              >
                <svg
                  class="w-6 h-6 mr-2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Upload Image
              </label>
            </div>
            <div class="mb-4">
              <label class="block font-bold text-white" for="videoUpload"
                >Video Upload</label
              >
              <input
                class="hidden"
                id="videoUpload"
                type="file"
                accept="video/*"
                @change="handleVideoUpload"
              />
              <label
                class="flex items-center justify-center w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                for="videoUpload"
              >
                <svg
                  class="w-6 h-6 mr-2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                </svg>
                Upload Video
              </label>
            </div>
            <div v-if="mediaUploaded" class="">
              <div class="flex items-center flex-col">
                <label class="block font-bold text-white w-full">Name</label>
                <input
                  class="w-full bg-gray-200 text-gray-800 rounded py-2 px-4 mb-2 focus:outline-none focus:bg-white focus:text-gray-800"
                  type="text"
                  placeholder="Enter name"
                  v-model="nameInput"
                />
                <img
                  v-if="selectedImage"
                  :src="selectedMedia.url"
                  class="w-max h-max object-cover rounded"
                  alt="Selected Image"
                />
                <video
                  v-if="selectedVideo"
                  :src="selectedMedia.url"
                  class="w-20 h-20 object-cover rounded"
                  controls
                ></video>
                <div class="m-4 flex flex-col">
                  <label class="block font-bold text-white w-full">Tags</label>
                  <div class="flex">
                    <input
                      class="w-full bg-gray-200 text-gray-800 rounded py-2 px-4 mr-2 focus:outline-none focus:bg-white focus:text-gray-800"
                      type="text"
                      placeholder="Add tags..."
                      v-model="tagsInput"
                      @keydown.enter="addTag"
                    />
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      @click="addTag"
                    >
                      Add Tag
                    </button>
                  </div>
                  <div class="mt-2">
                    <span
                      v-for="tag in tags"
                      :key="tag"
                      class="tag bg-gray-200 text-gray-800 rounded py-1 px-2 mr-2 inline-flex items-center"
                    >
                      {{ tag }}
                      <button
                        class="tag-remove ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                        @click="removeTag(tag)"
                      >
                        <svg
                          class="w-4 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-9H9v2h6v-2z"
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-end">
              <button
                class="transition-all duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-auto"
                type="submit"
                @click="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "../layout/Footer.vue";
import Header from "../layout/Header.vue";
export default {
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      activeTab: "image",
      selectedImage: null,
      selectedVideo: null,
      selectedMedia: null,
      mediaUploaded: false,
      nameInput: "",
      tagsInput: "",
      tags: [],
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedImage = URL.createObjectURL(file);
        this.selectedVideo = null;
        this.selectedMedia = {
          url: this.selectedImage,
          type: "image",
        };
        this.mediaUploaded = true;
      }
    },
    handleVideoUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedVideo = URL.createObjectURL(file);
        this.selectedImage = null;
        this.selectedMedia = {
          url: this.selectedVideo,
          type: "video",
        };
        this.mediaUploaded = true;
      }
    },
    addTag() {
      if (this.tagsInput) {
        this.tags.push(this.tagsInput);
        this.tagsInput = "";
      }
    },
    submit() {},
    removeTag(tag) {
      const index = this.tags.indexOf(tag);
      if (index !== -1) {
        this.tags.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
.tab {
  display: inline-block;
  cursor: pointer;
  padding: 0.5rem;
}

.tab.active {
  border-bottom: 2px solid #4f46e5;
}

.tag {
  background-color: #f2f2f2;
  color: #333333;
}
</style>
