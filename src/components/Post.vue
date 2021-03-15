<template>
  <div class="post">
    <header class="header">
      <div class="header-author">
        <Avatar class="avatar" :size="40"  />
        <div class="author">
          <Ctext tag="p" size="bold">mucahitkok</Ctext>
          <Ctext tag="p" size="xsmall">Elazıığ,Türkiye</Ctext>
        </div>
      </div>
      <div class="header-more">
        <button type="button">
          <IconMore />
        </button>
      </div>
    </header>


    
    <div class="post-media">
      <img src="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/85001870_126932968867036_8631398277213790877_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=gmEg004jzJEAX8oKUOQ&oh=a066df4979d004130ca7436fb138857f&oe=607ADF47"
           alt="">
    </div>


    <div class="action-buttons">
      <button type="button">
        <IconLike />
      </button>
      <button type="button">
        <IconComment />
      </button>
      <button type="button">
        <IconDirect />
      </button>
      <button class="action-save" type="button">
        <IconSave />
      </button>
    </div>

    
    

  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Ctext from "@/components/ctext";
import IconMore from "@/icons/more.svg";
import IconLike from "@/icons/like.svg";
import IconComment from "@/icons/comment.svg";
import IconDirect from "@/icons/direct.svg";
import IconSave from "@/icons/save.svg"

export default {
  name: "Post",
  components: {Ctext, Avatar,IconMore,IconLike,IconComment,IconDirect,IconSave}
}
</script>

<style scoped>
.post {
  border-radius: 3px;
  border: 1px solid rgb(var(--b6a));
}

.header{
  display: flex;
  align-items: center;
  height: 27px;
  margin: 16px;
  &-author{
    display: flex;
    align-items: center;
    .avatar{
      margin-right: 8px;
    }

  }
  &-more{
    margin-left: auto;
  }
}

.action-buttons{
  margin-top: 4px;
  padding: 0 16px;
  height: 40px;
  display: flex;
  button{
    padding: 8px;

  }
  .action-save{
    margin-left: auto;
    margin-right: 0;
  }
}

</style>