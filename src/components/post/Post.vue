<template>
  <div class="container">
    <Header />
    <div class="flex items-center justify-center mt-10">
      <div class="max-w-md">
        <div v-if="activeTab === 'image'">
          <div class="bg-[#260742] rounded-lg shadow-lg p-8">
            <div>
              <div class="mb-4">
                <div v-if="!selectedImage" class="border-dashed border-2 border-gray-300 p-4 mb-4 cursor-pointer" @click="openFileExplorer" @drop.prevent="handleDrop" @dragover.prevent>
                  <p class="text-gray-500">Drop image here or click to upload</p>
                </div>

                <label class="block font-bold text-white text-sm" for="imageUpload">
                  <input class="hidden" id="imageUpload" type="file" accept="image/jpeg,image/jpg" ref="fileInput" @change="handleFileInput" />
                </label>
              </div>
              <div v-if="mediaUploaded" class="">
                <div class="flex items-center flex-col">
                  <label class="block font-bold text-white text-sm">Name</label>
                  <input class="w-full bg-gray-800 text-white rounded py-2 px-4 mb-2 focus:outline-none focus:bg-gray-900" type="text" placeholder="Enter name" v-model="nameInput" />
                  <img v-if="selectedImage" :src="selectedImage" class="w-full h-auto rounded" alt="Selected Image" />
                  <video v-if="selectedVideo" :src="selectedVideo" class="w-full h-auto rounded" controls></video>
                  <div class="m-4 flex flex-col">
                    <label class="block font-bold text-white text-sm">Tags</label>
                    <div class="flex">
                      <select class="w-full bg-gray-800 text-white rounded py-2 px-4 mr-2 focus:outline-none focus:bg-gray-900" v-model="selectedTag">
                        <option disabled value="">Please select a tag</option>
                        <option v-for="tag in allTags" :key="tag.id" :value="tag.name">
                          {{ tag.name }}
                        </option>
                      </select>
                      <button class="bg-blue-500 text-white rounded py-2 px-4 focus:outline-none focus:bg-blue-700" @click="addTag">
                        Add Tag
                      </button>
                    </div>
                    <div class="mt-2">
                      <span v-for="tag in tags" :key="tag" class="tag bg-blue-500 text-white rounded py-1 px-2 mr-2 inline-flex items-center">
                        {{ tag }}
                        <button class="tag-remove ml-2 text-red-500 hover:text-red-700 focus:outline-none transition duration-300 ease-in-out" @click="removeTag(tag)">
                          <svg class="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-9H9v2h6v-2z" />
                          </svg>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-end">
                <button class="transition-all duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-auto" type="submit" @click="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "../layout/Footer.vue";
import Header from "../layout/Header.vue";
import VueJwtDecode from 'vue-jwt-decode';
import { uuid } from 'vue-uuid';

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
      selectedTag: "",
      uuid: "",
      tags: [],
      allTags: [],
    };
  },
  created() {
    axios.get('https://amiami.onrender.com/api/tag/getAllTags')
      .then(response => {
        this.allTags = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    openFileExplorer() {
      this.$refs.fileInput.click();
    },
    handleFileInput(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedImage = URL.createObjectURL(file);
        this.selectedVideo = null;
        this.selectedMedia = {
          file: file,
          url: this.selectedImage,
          type: "image",
        };
        this.mediaUploaded = true;
      }
    },
    handleDrop(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedImage = URL.createObjectURL(file);
        this.selectedVideo = null;
        this.selectedMedia = {
          file: file,
          url: this.selectedImage,
          type: "image",
        };
        this.mediaUploaded = true;
      }
    },
    addTag() {
      if (this.selectedTag) {
        this.tags.push(this.selectedTag);
        this.allTags = this.allTags.filter(tag => tag.name !== this.selectedTag);
        this.selectedTag = "";
      }
    },
    removeTag(tag) {
      const index = this.tags.indexOf(tag);
      if (index !== -1) {
        this.tags.splice(index, 1);
      }
    },
    async submit(){
      try{
        const token = sessionStorage.getItem('token');
        const genUuid = uuid.v4();
        if (!token) {
       console.log('Token not found');
       return;
        }
        const decoded = VueJwtDecode.decode(token);
        const formData = new FormData();
        formData.append("name", this.nameInput);
        formData.append("tags", this.tags);
        formData.append("file", this.selectedMedia.file);
        formData.append("user" , decoded.sub);
        formData.append("uuid", genUuid);
        console.log(formData);
        console.log(decoded);
        axios.post('https://amiami.onrender.com/api/image/upload', formData)
          .then((response) => {
            console.log(response);
            this.$router.push({ path: `/post/${genUuid}` });
          }, (error) => {
            alert('Failed to upload image');
            this.$router.push({ path: `/` });
          })
      } catch (error) {
        console.error(error);
      }
    }
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

.container {
    margin: 0 auto;
    padding: 2rem 1rem;
    max-width: 1200px;
  }
</style>S