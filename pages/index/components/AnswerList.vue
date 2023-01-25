<template>
  <div>
    <div v-for="(_, index) in data" :key="index" class="wrap-answer">
      <AnswerItem />
      <Paginator
        v-if="showPaginator(index, data)"
        :page-count="pageState.count"
        :current-page="pageState.currentPage"
      ></Paginator>
      <!-- <Paginator :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import AnswerItem from './AnswerItem.vue'
import Paginator from '~~/components/common/Paginator/index.vue'
const data = [1, 2, 3]

const pageState = reactive({
  count: 10, // 总页数
  currentPage: 1, // 当前页
})

// 显示分页
// const showPaginator = computed(() => pageState.count && pageState.currentPage)
const showPaginator = (itemIndex: number = 0, items: any[] = []) => {
  return items.length && itemIndex === items.length - 1 && pageState.count && pageState.currentPage
}
// const getList = () => {}
</script>
<style scoped lang="stylus">
.wrap-answer:not(:last-child)
  // padding 20px
  border-bottom 1px solid #f0f2f7
</style>
