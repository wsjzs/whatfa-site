<template>
  <div class="answer-list">
    <div class="list-container">
      <div v-for="(_, index) in data" :key="index" class="wrap-answer">
        <AnswerItem />
      </div>
    </div>
    <div class="answer-list--footer">
      <NPagination v-model:page="page" :page-count="100">
        <template #label="info">
          <NuxtLink v-if="info.type === 'page'" class="page-link" :to="getPageRoute(info.node)">
            {{ info.type === 'page' ? info.node : '...' }}
          </NuxtLink>
          <span v-else>...</span>
        </template>
      </NPagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NPagination } from 'naive-ui'
import AnswerItem from './AnswerItem.vue'

interface IProps {
  currentPage: number
}
const props = defineProps<IProps>()
const data = [1, 2, 3]
const page = ref(props.currentPage || 1)

// const pageState = reactive({
//   count: 10, // 总页数
//   currentPage: 1, // 当前页
// })

const getPageRoute = (page: number) => `/?page=${page}`
</script>
<style scoped lang="stylus">

.list-container
  .wrap-answer:not(:last-child)
    border-bottom 1px solid #f0f2f7

.page-link
  width 100%
  text-decoration none
  color inherit
  text-align center
.answer-list--footer
  padding 20px
</style>
