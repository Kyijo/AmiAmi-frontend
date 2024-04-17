<template>
  <div class="container">
    <Header />
    <div class="content">
      <div class="image-card-container">
        <ImageCard
          v-for="(image, index) in visibleImages"
          :key="index"
          :imageUrl="image.urlImage"
          :uuid="image.uuid"
          @image-clicked="handleImageClicked(image.uuid)"
        />
      </div>
      <div ref="sentinel"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../layout/Header.vue';
import Footer from '../layout/Footer.vue';
import ImageCard from '../post/ImageCard.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    ImageCard,
  },
  data() {
    return {
      allImages: [],
      visibleImages: [],
      currentPage: 0,
      perPage: 9,
      loading: false,
    };
  },
  mounted() {
    this.fetchAllImages();
    this.createIntersectionObserver();
  },
  methods: {
    fetchAllImages() {
      axios
        .get('https://amiami.onrender.com/api/image/getAllImages')
        .then(response => {
          this.visibleImages = response.data;
          // this.loadNextPage();
        })
        .catch(error => {
          console.error(error);
        });
    },
    loadNextPage() {
      const start = this.currentPage * this.perPage;
      const end = start + this.perPage;

      const newImages = this.allImages.slice(start, end > this.allImages.length ? undefined : end)
        .filter(image => !this.visibleImages.some(visibleImage => visibleImage.uuid === image.uuid));

      this.visibleImages = [...this.visibleImages, ...newImages];
      this.currentPage++;
    },
    handleImageClicked(uuid) {
      this.$router.push({ path: `/post/${uuid}` });
    },
    createIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };

      const observer = new IntersectionObserver(this.handleObserver, options);
      observer.observe(this.$refs.sentinel);
    },
    handleObserver(entries) {
      if (entries[0].isIntersecting && !this.loading) {
        this.loadNextPage();
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 1200px;
}

.content {
  margin-top: 2rem;
}

.image-card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
}

.image-card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.image-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.image-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .image-card-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

@media (max-width: 576px) {
  .image-card-container {
    grid-template-columns: 1fr;
  }
}
</style>