<template>
    <div class="image-details">
        <div class="image-details__info">
            <h2>{{ image.title }}</h2>
        </div>
        <div class="image-details__image">
            <img :src="image.url" alt="picture of image">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ImageDetails',
        data() {
            return {
                image: null
            }
        },
        created() {
            const imageId = this.$route.params.id;

            axios.get(`http://localhost:1234/api/image/get/${imageId}`)
                .then(response => {
                    this.image = response.data;
                })
                .catch(error => {
                    console.log(error);
                }
            );
        },
    }
</script>