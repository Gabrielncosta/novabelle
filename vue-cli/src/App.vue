<template>
  <div id="app">
    <siteHeader></siteHeader>
    <router-view></router-view>
    <siteFooter></siteFooter>
  </div>
</template>

<script>
import Header from './components/header';
import Footer from './components/footer';

export default {
  components: {
    siteHeader: Header,
    siteFooter: Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
