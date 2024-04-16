<template>
    <div class="image-card" @click="handleClick">
        <img :src="imageUrl" alt="AmiAmi Image" />
        <div class="card-content">
            <h2>{{ name }}</h2>
            <p>Click to see more</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageUrl: String,
        name: String,
        uuid: String,
    },
    methods: {
        handleClick() {
            this.$emit('image-clicked', this.uuid);
        },
    },
};
</script>
  
  <style scoped>
  .image-card {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    width: 300px;
  }
  
  .image-card img {
    width: 100%;
    height: 200px; 
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  
  .card-content {
    padding: 1rem;
    text-align: center;
    background-color: #f8f9fa;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  </style>
  
  