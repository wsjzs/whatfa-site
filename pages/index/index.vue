<template>
  <div class="main-inner card">
    <AnswerList :current-page="currentPage" :refresh="refresh"></AnswerList>
  </div>
</template>
<script lang="ts" setup>
import AnswerList from './components/AnswerList.vue'
const route = useRoute()
const { data: notes ,refresh} = await useFetch('/api/notes',{ baseURL: 'http://localhost:7001'})
const currentPage = computed(() => Number(route.query.page || 1))
watch(route,()=>{
  refresh()
})
</script>

<style scoped lang="stylus">
.main-inner
  -webkit-box-shadow 0 1px 3px hsl(0deg 0% 7% / 10%)
  box-shadow 0 1px 3px #020202

.card
  background: #fff;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 10px;
  overflow hidden
</style>
