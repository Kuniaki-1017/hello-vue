<template>
    <nav>
      <h2>HeaderUsers</h2>
      <router-link 
      to="/" 
      active-class="link--active"
      exact
      class="link"
      style="background-color: #FFFF00;"
      >Home</router-link>
      <router-link 
      to="/users" 
      active-class="link--active"
      exact
      class="link"
      style="background-color: #FFFF00;"
      >Users</router-link>
    </nav>
</template>

<style scoped>
.link{
  margin-right: 10px;
}
.link--active{
  font-size: 20px;
}
</style>