<template>
  <AppLayout>
    <div class="mt-2 mb-10 bg-light-50"></div>
    <NoteListItem :note="note"></NoteListItem>
  </AppLayout>
</template>

<script lang="ts" setup>
import NoteListItem from '~~/components/NoteListItem.vue'
import AppLayout from '~~/layouts/AppLayout.vue'

// const text = ref('3')
// 服务端渲染text
// const timeOutText = new Promise<string>(resolve => {
//   setTimeout(() => {
//     resolve('done')
//   }, 2000)
// })

const note = ref({ title: '驾驶机动车', id: 10, commentNum: 12, likeNum: 33, collectNum: 11 })

// text.value = await timeOutText
</script>
