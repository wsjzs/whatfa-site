<template>
  <div class="answer-list">
    <div class="list-container">
      <div v-for="(_, index) in data" :key="index" class="wrap-answer">
        <AnswerItem :id="`${index}`" />
      </div>
    </div>
    <div class="answer-list--footer">
      <NPagination v-model:page="page" :page-count="100">
        <template #label="info">
          <!-- 页码 -->
          <NuxtLink v-if="info.type === 'page'" class="page-link" :to="getPageRoute(info.node)">
            {{ info.type === 'page' ? info.node : '...' }}
          </NuxtLink>
          <span v-else>...</span>
        </template>
        <!-- 下一页 -->
        <template #next="paginationInfo: PaginationInfo">
          <NuxtLink :class="['page-link', { ban: banNextPrev(paginationInfo) }]" :to="getNextPageRoute(paginationInfo)">
            next
          </NuxtLink>
        </template>
        <!-- 上一页 -->
        <template #prev="paginationInfo: PaginationInfo">
          <NuxtLink :class="['page-link', { ban: banNextPrev(paginationInfo) }]" :to="getPrePageRoute(paginationInfo)">
            prev
          </NuxtLink>
        </template>
      </NPagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NPagination, PaginationInfo } from 'naive-ui'
import AnswerItem from './AnswerItem.vue'

interface IProps {
  currentPage: number
}
const props = defineProps<IProps>()
const data: number[] = [1, 2, 3]
const page = ref(props.currentPage || 1)

const getNextPageRoute = (info: PaginationInfo) => {
  const { page, pageCount } = info
  return `/?page=${Math.min(page + 1, pageCount)}`
}

const getPrePageRoute = (info: PaginationInfo) => {
  return `/?page=${Math.max(info.page - 1, 1)}`
}

// 下一页&上一页是否禁用
const banNextPrev = (info: PaginationInfo) => {
  const { page, pageCount } = info
  return page === pageCount
}
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
.link
  color inherit
  text-decoration none
  &:hover
    text-decoration underline
.ban
  cursor not-allowed
.page-link
  width 100%
  text-decoration none
  color inherit
  text-align center
.answer-list--footer
  padding 20px
</style>
