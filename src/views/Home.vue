<template>
    <div style=" background-color: #D7EEFF;">
        <h3>Home</h3>
        <button @click="toUsers">Usersのページに行く</button>
        <p>{{doubleCount}}</p>
        <p>{{tripleCount}}</p>
        <input 
        type="text" 
        v-model="message"
        >
        {{ message }}
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters('count', ['doubleCount', 'tripleCount']),
        // message(){
        //     return this.$store.getters.message;
        // },
        // doubleCount(){
        //     return this.$store.getters['count/doubleCount'];
        // },
        // tripleCount(){
        //     return this.$store.getters['count/tripleCountCount'];
        // },
        message: {
            get(){
                return this.$store.getters.message;
            },
            set(newMessage){
                this.$store.dispatch('updateMessage', newMessage);
            },
        }
    },
    methods: {
        toUsers(){
            this.$router.push({ 
                name: 'users-id-profile',
                params: {id: 1}
                });
        },
        // updateMessage(e){
        //     this.$store.dispatch('updateMessage', e.target.value);
        // }

    }
}
</script>
