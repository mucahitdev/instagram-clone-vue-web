<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <About msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import About from '/src/views/About'

export default {
  name: 'Home',
  components: {
    About
  }
}
</script>
