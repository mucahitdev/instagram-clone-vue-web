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
        <router-link to="/profile">
          <Avatar :size="26" />
        </router-link>
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
import Avatar from "@/components/Avatar";

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
    Avatar,

    Container
  }
}
</script>

<style scoped>
.header {
  border-bottom: 1px solid rgba(var(--b6a));
  background-color: rgba(var(--d87));
  height: 54px;
  position: fixed;
  left:0;
  right: 0;
  top: 0;
  z-index: 90;
}
.header-inner {
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (--t) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 10px;
    height: 44px;
  }
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
  display: none;
  @media (--t) {
    text-align: center;
    display: block;
    input {
      width: 215px;
      height: 28px;
      border: 1px solid rgba(var(--b6a));
      border-radius: 4px;
      background: rgba(var(--b3f));
      padding: 0 20px;
    }
  }
  
}

.navigation {
  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:#fff;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid rgba(var(--b6a));
  @media (--t) {
    border:0;
    height: auto;
    position: static;
    justify-content: flex-end;
    a {
      margin-left: 20px;
    }
  }
}
</style>
