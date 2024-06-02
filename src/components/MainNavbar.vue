<template>
  <div class="navbar">
    <div class="icon">
      <h2 class="logo">WEB TECHNOLOGY</h2>
    </div>

    <div class="menu">
      <ul>
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/about">ABOUT</router-link></li>
        <li><router-link to="/my-profile">MY PROFILE</router-link></li>
        <li><router-link to="/photos">PHOTOS</router-link></li>
        <li><router-link to="/contact-us">CONTACT US</router-link></li>
      </ul>
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'MainNavbar'
}
</script>

<style scoped>
/* CSS styles for MainNavbar component */
.navbar {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.5);
}

.icon .logo {
  color: #00ff7f;
  font-size: 22px;
  font-family: 'Georgia', serif;
  padding: 0;
  margin: 0;
  line-height: 30px;
}

.menu {
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 10px;
}

.menu ul {
  display: flex;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu ul li {
  display: flex;
}

.menu ul li a {
  text-decoration: none;
  color: #ffffff;
  font-family: 'Verdana', sans-serif;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  padding: 5px 10px;
  border-radius: 5px;
  white-space: nowrap;
}

.menu ul li a:hover {
  background-color: #00ff7f;
  color: #000000;
}

.search {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 10px;
}

.srch {
  font-family: 'Courier New', monospace;
  width: 120px;
  height: 30px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #00ff7f;
  color: #ffffff;
  font-size: 14px;
  padding: 0 10px;
  border-radius: 5px;
}

.btn {
  width: 80px;
  height: 30px;
  background: #00ff7f;
  border: none;
  color: #000000;
  font-size: 14px;
  border-radius: 5px;
  transition: 0.2s ease;
  cursor: pointer;
}

.btn:hover {
  background-color: #ffffff;
  color: #00ff7f;
}

.btn:focus, .srch:focus {
  outline: none;
}
</style>
