<template>
  <div class="content">
    <h1>SECJ3483 <br><span>Web Technology</span> <br>Course</h1>
    <p class="par">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque
      expedita atque eveniet <br> quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad delectus
      <br> a quae totam ipsa illum minus laudantium?
    </p>
    <button class="cn"><a href="#">PARTICIPATE</a></button>
  </div>
</template>

<script>
export default {
  name: 'CourseContent'
}
</script>

<style scoped>
.content {
  width: 100%;
  max-width: 1200px;
  text-align: center;
  color: #ffffff;
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
}

.content h1 {
  font-family: 'Georgia', serif;
  font-size: 50px;
  margin-bottom: 20px;
}

.content span {
  color: #00ff7f;
  font-size: 60px;
}

.content .par {
  font-family: 'Verdana', sans-serif;
  margin-bottom: 30px;
  line-height: 1.6;
}

.content .cn {
  width: 220px;
  height: 50px;
  background: #00ff7f;
  border: none;
  font-size: 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s ease;
}

.content .cn a {
  text-decoration: none;
  color: #000000;
}

.cn:hover {
  background-color: #ffffff;
  transform: scale(1.05);
}
</style>
