<template>
  <div class="home">
    <ctext tag="h1">HOME</ctext>
  </div>
</template>

<script>
// @ is an alias to /src
import ctext from '@/components/ctext'
export default {
  name: 'Home',
  components: {
    ctext: ctext
  }
}
</script>
