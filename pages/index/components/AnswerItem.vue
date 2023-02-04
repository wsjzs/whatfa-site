<template>
  <div class="answer-item" @click="handleGoNote(id)">
    <div class="title">test title</div>
    <div class="content">
      I get test
      It's test…
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'

interface IProps{
  id:string
}
defineProps<IProps>()
const router = useRouter()
  const handleGoNote=(id:string)=>{
    // console.log(id)
    router.push({path:`/note/${id}`})
  }
</script>
<style scoped lang="stylus">
// .content
    // color red

.answer-item
  cursor pointer
  padding 20px
.title
    color #121212
    font-size 18px
    font-synthesis style
    font-weight 600
    line-height 1.6
</style>
