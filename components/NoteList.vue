<template>
  <div>
    <div v-for="(note, index) in notes" :key="index">
      <NoteListItem :note="note"></NoteListItem>
    </div>
    <div ref="reference"></div>
  </div>
</template>

<script lang="ts" setup>
import NoteListItem from './NoteListItem.vue'
import { getNotes, INoteListData } from '~~/service/note'

const notesData = ref<INoteListData>(null)

notesData.value = getNotes({} as any)

const notes = ref(notesData.value.notes)

const isLoading = ref(false)
const reference = ref<HTMLDivElement>()

onMounted(() => {
  const loadMoreObserver = new IntersectionObserver((enrties, _) => {
    if (isLoading.value === true) return
    isLoading.value = true
    const listContainerEntrty = enrties[0]
    if (listContainerEntrty.isIntersecting) {
      notes.value.push(...getNotes({} as any).notes)
    }
    isLoading.value = false
  })
  loadMoreObserver.observe(reference.value)
})
</script>
