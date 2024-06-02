<template>
  <div class="main">
    <MainNavbar />
    <router-view />
  </div>
</template>

<script>
import MainNavbar from './components/MainNavbar.vue'

export default {
  name: 'App',
  components: {
    MainNavbar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  width: 100%;
  background: url('https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
