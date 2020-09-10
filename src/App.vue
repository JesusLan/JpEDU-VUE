<template>
  <div id="app">
    <el-container direction="vertical">
      <app-header></app-header>
      <el-main>
        <!-- 引入路由 -->
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
    import  AppHeader  from "./components/AppHeader"
    import localforage from 'localforage'
    export default {
        name: 'app',
        components: {
            AppHeader,
        },
        created() {
            localforage.getItem('token').then( token => {
                if (token  && !this.$store.token) {
                    this.$store.commit('SET_TOKEN', {token})
                }
            })
        }
    }
</script>

<style>
  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>