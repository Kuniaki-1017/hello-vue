<template>
    <nav>
      <h2>HeaderHome</h2>
      <router-link 
      to="/" 
      active-class="link--active"
      exact
      class="link"
      style="background-color: #FFFF00;"
      >Home</router-link>

      <router-link 
      :to="{name: 'users-id-profile',params: {id: 1}, query: {lang: 'ja', page: 2}, hash: '#next-user',   }"
      active-class="link--active"
      exact
      class="link"
      style="background-color: #FFFF00;"
      >Users</router-link>
      <button @click="increment(2)">+1</button>
      <button @click="decrement(2)">-1</button>
    </nav>
</template>

<script>
// import {mapMutations} from 'vuex';
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('count', ['increment', 'decrement']),
    // ...mapMutations(['increment', 'decrement'])
    // increment(){
    //   this.$store.dispatch('increment', 2);
    // },
    // decrement(){
    //   this.$store.dispatch('decrement', 2);
    // },
  },
};
</script>


<style scoped>
.link{
  margin-right: 10px;
}
.link--active{
  font-size: 20px;
}
</style>