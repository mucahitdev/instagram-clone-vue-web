<template>
  <div class="home">
    <ctext tag="h1">Profile Tag</ctext>
  </div>
</template>

<script>
// @ is an alias to /src
import ctext from '@/components/ctext'
export default {
  name: 'ProfileTag',
  components: {
    ctext: ctext
  }
}
</script>
