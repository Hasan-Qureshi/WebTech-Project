<template>
  <div>
    <CourseContent />
  </div>
</template>

<script>
import CourseContent from '../components/CourseContent.vue'

export default {
  name: 'HomePage',
  components: {
    CourseContent
  }
}
</script>

<style scoped>
h1 {
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
}
</style>
