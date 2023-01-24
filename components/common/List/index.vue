<template>
  <div>
    <template>
      <div>
        <slot />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
// import { PropType } from 'vue'
// import { ILoadDataParam } from './interface'

// const props = defineProps({
//   loadData: {
//     // eslint-disable-next-line no-use-before-define
//     type: Function as PropType<<T extends {}>(param: ILoadDataParam) => T>,
//     default: () => {},
//   },
// })

// TODO 加载更多
// const pageNum = ref(0)
// const pageSize = ref(20)

// const loadMore = props.loadData
</script>
