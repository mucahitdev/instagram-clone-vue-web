<!--suppress ALL -->
<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/" class="logo">
        <img src="../icons/logo.png" alt="" />
      </router-link>

      <form class="search">
        <input type="text" placeholder="Ara" />
      </form>

      <nav class="navigation">
        <router-link to="/">
          <IconHomeFill v-if="$route.name === 'Home'" />
          <IconHome v-else />
        </router-link>
        <router-link to="/direct">
          <IconDirectFill v-if="$route.name === 'Direct'" />
          <IconDirect v-else />
        </router-link>
        <router-link to="/explore">
          <IconExploreFill v-if="$route.name === 'Explore'" />
          <IconExplore v-else />
        </router-link>
        <router-link to="/profile">Profile</router-link>
      </nav>
    </Container>
  </header>
</template>

<script>
import IconHome from '@/icons/home.svg'
import IconHomeFill from '@/icons/home-fill.svg'
import IconDirect from '@/icons/direct.svg'
import IconDirectFill from '@/icons/direct-fill.svg'
import IconExplore from '@/icons/explore.svg'
import IconExploreFill from '@/icons/explore-fill.svg'

import Container from '@/components/Container'

export default {
  name: 'Header',
  components: {
    IconHome,
    IconHomeFill,
    IconDirect,
    IconDirectFill,
    IconExplore,
    IconExploreFill,

    Container
  }
}
</script>

<style scoped>
.header {
  border-bottom: 1px solid rgba(var(--b6a));
  background-color: rgba(var(--d87));
  height: 54px;
}
.header-inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 10px;
  height: 54px;
}
.logo {
  width: 103px;
  height: 29px;
  margin: 0;
  padding: 0;
}
.logo img {
  height: 29px;
}
.search {
  text-align: center;
}
.search input {
  width: 215px;
  height: 28px;
  border: 1px solid rgba(var(--b6a));
  border-radius: 4px;
  background: rgba(var(--b3f));
  padding: 0 20px;
}
.navigation {
  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(76, 0, 255);
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (--t) {
    height: auto;
    position: static;
    justify-content: flex-end;
    a {
      margin-left: 20px;
    }
  }
}
</style>
