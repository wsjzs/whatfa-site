<template>
  <div class="answer-item">
    <NuxtLink :to="`/note/${id}`" target="_blank" class="link title">test title</NuxtLink>
    <div class="content">
      I get test
      It's test…
    </div>
  </div>
</template>

<script setup lang="ts">

interface IProps{
  id:string
}
defineProps<IProps>()
</script>
<style scoped lang="stylus">
.link
  color inherit
  text-decoration none
  &:hover
    text-decoration underline
.answer-item
  // cursor pointer
  padding 20px
.title
    color #121212
    font-size 18px
    font-synthesis style
    font-weight 600
    line-height 1.6
</style>
