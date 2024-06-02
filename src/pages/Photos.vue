<template>
  <div>
    <h1>Photos Page</h1>
    <div class="search-container">
      <input type="text" v-model="searchText" placeholder="Search photos..." class="search-input" />
    </div>
    <div class="photos">
      <div v-for="photo in displayedPhotos" :key="photo.id" class="photo">
        <div class="photo-wrapper">
          <img :src="photo.thumbnailUrl" alt="Photo" class="photo-image" />
          <p class="photo-title">{{ photo.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PhotosPage',
  data() {
    return {
      photos: [],
      searchText: ''
    }
  },
  created() {
    this.fetchPhotos()
  },
  methods: {
    async fetchPhotos() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
        this.photos = response.data
      } catch (error) {
        console.error('Error fetching photos:', error)
      }
    }
  },
  computed: {
    filteredPhotos() {
      return this.photos.filter(photo =>
        photo.title.toLowerCase().includes(this.searchText.toLowerCase())
      )
    },
    displayedPhotos() {
      return this.filteredPhotos.slice(0, 10)
    }
  }
}
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: right;
  margin-right: 90px;
  margin-bottom: 10px; 
  margin-top: -20px;

}

.search-input {
  width: 200px; 
  padding: 10px; 
  border: 3px solid #00ff7f; 
  border-radius: 5px; 
  font-size: 12px; 
}

.photos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.photo {
  margin: 20px;
  text-align: center;
}

.photo-wrapper {
  position: relative;
}

.photo-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.photo-title {
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
