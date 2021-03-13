<template>
  <div id="app">
    <Header />
    <main class="main">
      <Container>
        <router-view />
      </Container>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Container from '@/components/Container'
export default {
  name: 'App',
  components: {
    Header,
    Container
  }
}
</script>

<style>
.main {
  padding-top: 40px;
}
</style>
