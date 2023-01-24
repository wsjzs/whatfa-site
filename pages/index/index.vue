<template>
  <div>
    <!-- <BlockBar :blocks="blockData" :current="currentBlockType"></BlockBar> -->
    <!-- <NoteList :block-type="currentBlockType"></NoteList> -->
    <AnswerItem></AnswerItem>
  </div>
</template>
<script lang="ts" setup>
import AnswerItem from './components/AnswerItem.vue'
// import BlockBar from '~~/components/BlockBar.vue'
// import NoteList from '~~/components/NoteList.vue'
// import { getBlocks } from '~~/service/block'
// const blockData = ref(getBlocks())
// const currentBlockType = ref('')
// const route = useRoute()
// currentBlockType.value = route.params.blockType as string
</script>

<style scoped lang="stylus"></style>
