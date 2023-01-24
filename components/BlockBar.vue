<template>
  <div class="flex select-none">
    <div
      v-for="(block, index) in blocks.blocks"
      :key="index"
      :class="[
        'my-2 mx-2 px-2 cursor-pointer hover:(text-dark-300)',
        current === block.type ? 'text-dark-300' : 'text-gray-400 border-blue-500',
      ]"
    >
      <NuxtLink :to="`/${block.type}`">
        <span>{{ block.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import { IBlocksData } from '~~/service/block'
// export default defineComponent({
//   name: 'BlockBar',
defineProps({
  blocks: {
    type: Object as PropType<IBlocksData>,
    default: (): IBlocksData => ({}),
  },
  current: {
    type: String,
    default: '',
  },
})
</script>
