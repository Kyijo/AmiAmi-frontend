<template>
  <header>
    <div class="flex justify-between items-center px-4">
      <HeaderLogo />
      <HeaderNavigation
        :isLoggedIn="isLoggedIn"
        :username="username"
        :showDropdown="showDropdown"
        @toggle-dropdown="toggleDropdown"
        @logout="logout"
      />
    </div>
    <div class="relative">
      <div v-if="!showAllTags">
        <div class="flex justify-between items-center">
          <span class="left-20 relative px-4 font-bold text-white">SOME TAGS</span>
          <a href="#" class="text-white hover:text-blue-600 font-bold absolute right-20" @click="showAllTags = true">
            VIEW ALL TAGS
          </a>
        </div>
        <div class="grid grid-cols-12 mt-4">
          <template v-for="(tag, index) in displayedTags" :key="tag.id">
            <HeaderTag
              :image="tag.backgroundImage"
              :label="tag.name"
            />
            <br v-if="(index + 1) % maxDisplayedTags === 0 && index !== displayedTags.length - 1" />
          </template>
        </div>
      </div>
      <div v-else>
        <div class="flex justify-between items-center">
          <span class="left-20 relative px-4 font-bold text-white">SOME TAGS</span>
          <a href="#" class="text-white hover:text-blue-600 font-bold absolute right-20" @click="showAllTags = false">
            HIDE TAGS
          </a>
        </div>
        <div class="grid grid-cols-12 mt-4 justify-between">
          <template v-for="(tag, index) in tags" :key="tag.id">
            <HeaderTag
              :image="tag.backgroundImage"
              :label="tag.name"
              :class="getRowClass(index)"
            />
            <br v-if="(index + 1) % 12 === 0 && index !== tags.length - 1" />
          </template>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
import axios from 'axios';
import HeaderLogo from './HeaderComponents/HeaderLogo.vue';
import HeaderNavigation from './HeaderComponents/HeaderNavigation.vue';
import HeaderTag from './HeaderComponents/HeaderTag.vue';
import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'Header',
  components: {
    HeaderLogo,
    HeaderNavigation,
    HeaderTag,
  },
  data() {
    return {
      isLoggedIn: false,
      username: '',
      showDropdown: false,
      tags: [],
      displayedTags: [],
      maxDisplayedTags: 12,
      showAllTags: false,
    };
  },
  created() {
    this.checkLogin();
    this.fetchTags();
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    redirect(route) {
      this.$router.push(route);
    },
    checkLogin() {
      const token = sessionStorage.getItem('token');
      if (token) {
        this.isLoggedIn = true;
        this.decodeToken(token);
      } else {
        this.isLoggedIn = false;
      }
    },
    decodeToken(token) {
      const decoded = VueJwtDecode.decode(token);
      if (decoded) {
        this.username = decoded.name;
      }
    },
    logout() {
      sessionStorage.removeItem('token');
      this.$router.push('/login');
    },
    fetchTags() {
      axios
        .get('http://localhost:1234/api/tag/getAllTags')
        .then((response) => {
          this.tags = response.data;
          this.displayedTags = this.tags.slice(0, this.maxDisplayedTags);
        })
        .catch((error) => {
          console.error('Error fetching tags:', error);
        });
    },
    getRowClass(index) {
      // Calculate the row class based on the index
      if (index >= 12 && index < 24) {
        return 'row-span-2';
      } else if (index >= 24 && index < 36) {
        return 'row-span-3';
      } else if (index >= 36) {
        return 'row-span-4';
      } else {
        return '';
      }
    },
  },
};
</script>
