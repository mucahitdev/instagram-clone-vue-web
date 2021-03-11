<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ctext msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import ctext from '@/components/ctext'
export default {
  name: 'Home',
  components: {
    ctext : ctext
  }
}
</script>
