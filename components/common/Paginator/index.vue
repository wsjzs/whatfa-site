<template>
  <div class="paginator">
    <div v-for="(item, index) in items" :key="index" class="item">
      {{ item.text }}
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  /** 总页数 */
  pageCount: number
  /** 当前页 */
  currentPage: number
}
interface IItem {
  active: boolean
  text: string
  disabled: boolean
}
const props = defineProps<IProps>()

const makeItem = (text = '', active = false, disabled = false) => {
  return { text, active, disabled }
}
const items = computed(() => {
  const temps: IItem[] = []
  // 前一页
  if (props.currentPage === 1) {
    temps.push(makeItem('上一页'))
  }
  // if()
  return temps
})
</script>
<style scoped lang="stylus">
.paginator
  border 1px solid #d1d5db
</style>
