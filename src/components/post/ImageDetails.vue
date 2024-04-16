<template>
    <div class="container">
        <Header />
        <div class="container mx-auto py-8">
            <div class="relative max-w-lg mx-auto bg-custom-darkgray shadow-md rounded-lg overflow-hidden">
                <div class="absolute top-0 left-0 w-full px-6 py-4 bg-custom-darkgray shadow-md rounded-t-lg">
                    <h1 class="text-3xl font-bold text-custom-yellow glow">{{ imageDetails.name }}</h1>
                    <p class="text-xs text-gray-400">Uploaded by: <span class="text-custom-darkblue glow">{{ imageDetails.user }}</span></p>
                </div>
                <img :src="imageDetails.urlImage" alt="Image" class="w-full h-auto rounded-lg">
            </div>
            <div class="max-w-lg mx-auto mt-4 text-right">
                <div class="w-full">
                    <ul>
                        <li v-for="(tag, index) in imageDetails.tags" :key="index" class="inline-block px-3 py-1 mr-1 bg-custom-blue text-white rounded-full text-sm cursor-pointer hover:bg-custom-darkblue hover:text-custom-lightblue">{{ tag }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
  
<script>
import Header from '../layout/Header.vue';
import Footer from '../layout/Footer.vue';
  
export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            imageDetails: {},
            error: null,
        };
    },
    async created() {
        try {
            await this.fetchImageData();
        } catch (error) {
            this.error = error.message;
        }
    },
    methods: {
        async fetchImageData() {
            const response = await fetch(`http://localhost:1234/api/image/getByUuid/${this.$route.params.uuid}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.imageDetails = data;
        },
    },
};
</script>
  
<style>
/* Custom styles */
.container {
    margin: 0 auto;
    padding: 2rem 1rem;
    max-width: 1200px;
}

.bg-custom-darkgray {
    background-color: #150424;
}

.text-custom-yellow {
    color: #ffd700;
}

.text-custom-darkblue {
    color: #000080;
}

.glow {
    text-shadow: 0 0 10px #ffd700;
}

.bg-custom-blue {
    background-image: linear-gradient(#e66465, #9198e5);
}

.hover\:bg-custom-darkblue:hover {
    background-color: #000080;
}

.hover\:text-custom-lightblue:hover {
    color: #add8e6;
}

/* Positioning */
.relative {
    position: relative;
}

.absolute {
    position: absolute;
}

.top-0 {
    top: 0;
}

.left-0 {
    left: 0;
}

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

/* Increase size of image and name */
.text-3xl {
    font-size: 2rem;
}

/* Increase spacing between name and uploader */
.text-xs {
    margin-top: 0.5rem;
}

/* Increase image margin */
.max-w-lg {
    margin-bottom: 2rem;
}

.px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}

.py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
}
</style>