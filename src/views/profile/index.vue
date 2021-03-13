<template>
  <div class="home">
    <ctext tag="h1">Profile</ctext>

    <div id="nav">
      <router-link to="/profile">POST</router-link> |
      <router-link to="/profile/igtv">İGTV</router-link> |
      <router-link to="/profile/saved">SAVED</router-link> |
      <router-link to="/profile/tag">TAG</router-link> |
    </div>

    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import ctext from '@/components/ctext'
export default {
  name: 'Profile',
  components: {
    ctext: ctext
  }
}
</script>
