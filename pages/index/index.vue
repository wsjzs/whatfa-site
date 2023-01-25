<template>
  <div class="main-inner card">
    <!-- <BlockBar :blocks="blockData" :current="currentBlockType"></BlockBar> -->
    <!-- <NoteList :block-type="currentBlockType"></NoteList> -->
    <!-- <AnswerItem></AnswerItem> -->
    <AnswerList></AnswerList>
  </div>
</template>
<script lang="ts" setup>
// import AnswerItem from './components/AnswerItem.vue'
// import BlockBar from '~~/components/BlockBar.vue'
// import NoteList from '~~/components/NoteList.vue'
// import { getBlocks } from '~~/service/block'
// const blockData = ref(getBlocks())
// const currentBlockType = ref('')
// const route = useRoute()

import AnswerList from './components/AnswerList.vue'

// currentBlockType.value = route.params.blockType as string
</script>

<style scoped lang="stylus">
.main-inner
  -webkit-box-shadow 0 1px 3px hsl(0deg 0% 7% / 10%)
  box-shadow 0 1px 3px #020202
  // padding 20px

.card
  background: #fff;
  border-radius: 2px;
  // -webkit-box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
  // box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 10px;
  overflow hidden
</style>
