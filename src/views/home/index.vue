<template>
  <div class="home">
    <div class="timeline">
        <p>AS ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat adipisci in ipsam dolore
        m et dolore molestiae eveniet. Enim animi qui cumque laboriosam suscipit debitis blanditiis ut officiis dignissimos velit?</p>
        <p>Lorem ipsum doFlor sit amet consectetur adipisicing elit. Doloremque fugiat adipisci in ipsam dolore
        m et dolore molestiae eveniet. Enim animi qui cumque laboriosam suscipit debitis blanditiis ut officiis dignissimos velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat adipisci in ipsam dolore
        m et dolore molestiae eveniet. Enim animi qui cumque laboriosam suscipit debitis blanditiis ut officiis dignissimos velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat adipisci in ipsam dolore
        m et dolore molestiae eveniet. Enim animi qui cumque laboriosam suscipit debitis blanditiis ut officiis dignissimos velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat adipisci in ipsam dolore
        m et dolore molestiae eveniet. Enim animi qui cumque laboriosam suscipit debitis blanditiis ut officiis dignissimos velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat adipisci in ipsam dolore
        m et dolore molestiae eveniet. Enim animi qui cumque laboriosam suscipit debitis blanditiis ut officiis dignissimos velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat adipisci in ipsam dolore
        m et dolore molestiae eveniet. Enim animi qui cumque laboriosam suscipit debitis blanditiis ut officiis dignissimos velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat adipisci in ipsam dolore
        m et dolore molestiae eveniet. Enim animi qui cumque laboriosam suscipit debitis blanditiis ut officiis dignissimos velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat adipisci in ipsam dolore
        m et dolore molestiae eveniet. Enim animi qui cumque laboriosam suscipit debitis blanditiis ut officiis dignissimos velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat adipisci in ipsam dolore
        m et dolore molestiae eveniet. Enim animi qui cumque laboriosam suscipit debitis blanditiis ut officiis dignissimos velit?</p>

    </div>

    <div class="sidebar">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat adipisci in ipsam dolore
        m et dolore molestiae eveniet. Enim animi qui cumque laboriosam suscipit debitis blanditiis ut officiis dignissimos velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat adipisci in ipsam dolore
        m et dolore molestiae eveniet. Enim animi qui cumque laboriosam suscipit debitis blanditiis ut officiis dignissimos velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat adipisci in ipsam dolore
        m et dolore molestiae eveniet. Enim animi qui cumque laboriosam suscipit debitis blanditiis ut officiis dignissimos velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat adipisci in ipsam dolore
        m et dolore molestiae eveniet. Enim animi qui cumque laboriosam suscipit debitis blanditiis ut officiis dignissimos velit?</p>
    </div>


    
  </div>
</template>

<script>

export default {
  name: 'Home',
  
}
</script>

<style scoped>
.home {
  max-width: 616px;
  margin-left: auto;
  margin-right: auto;
  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 616px 1fr;
    grid-gap: 30px;
  }
}
.sidebar {
  display: none;
  @media (--t) {
    display:block;
  }
}
</style>
