<template>
  <!-- 为a标签添加href，利于ssr -->
  <NuxtLink :href="href" class="w-full p-4 border-t flex flex-col items-cente rcursor-pointer hover:bg-gray-50">
    <!-- 标题 -->
    <h1 class="flex text-base">{{ note.title }}</h1>

    <!-- middle -->
    <div class="flex">
      <!-- 文本 -->
      <div class="overflow-hidden ellipse">
        <!-- 用户信息 -->
        <div class="s text-gray-600 flex items-center leading-28px font-normal text-13px">
          <img class="rounded-1 h-6 w-6 mr-1" :src="note.avatar" alt="啦耶耶nickname" />
          <span class="flex-shrink-0">{{ note.nickname }}</span>
          <span class="font-light ml-1 truncate">{{ note.signature }}</span>
        </div>
        <!-- 内容 -->
        <div class="leading-22px ellipse font-light font-sans mr-1">{{ note.content }}</div>
      </div>

      <!-- 图片展示 -->
      <div v-if="note.imageUrl" class="w-98px h-72px rounded flex-shrink-0 overflow-hidden">
        <img object="cover" class="w-full h-full" :src="note.imageUrl" alt="更多操作" />
      </div>
    </div>
    <!-- bottom  点赞等 操作 -->
    <ul class="operators text-gray-400 mt-1 text-sm flex leading-18px font-light">
      <!-- 点赞 -->
      <li :class="{ 'text-sky-600': isLiked }" @click.prevent="handleLike">
        <span class="mr-1">{{ note.likeNum }}</span>
        <span class="">{{ isLiked ? '已赞' : '点赞' }}</span>
      </li>
      <!-- 评论 -->
      <li class="ml-3">
        <span class="mr-1">{{ note.commentNum }}</span>
        <span class="">评论</span>
      </li>
      <!-- 收藏 -->
      <li class="ml-3">
        <span class="mr-1">{{ note.collectNum }}</span>
        <span class="">收藏</span>
      </li>
    </ul>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { likeNote, cancelLikeNote } from '~~/service/like.js'
// import { NImage } from 'naive-ui'
// import { NImage } from 'naive-ui'
import { INoteListItemData } from '~~/service/note'

const props = defineProps({
  note: {
    type: Object as PropType<INoteListItemData>,
    default: {} as INoteListItemData,
  },
  intersectionObserverOptions: {
    type: String,
    default: '',
  },
})
const href = '/note/' + props.note.id

const isLiked = ref(false)
const handleLike = () => {
  const id = props.note.id
  if (isLiked.value) {
    cancelLikeNote(id)
  } else {
    likeNote(id)
  }

  isLiked.value = !isLiked.value
}

// const operators = computed(() => {
//   const makeOp = (args: { name: string; num: number; handle?: () => any }) => ({ ...args })
//   const ops: { name: string; num: number }[] = []
//   const { commentNum, likeNum, collectNum } = props.note
//   if (likeNum) {
//     ops.push(makeOp({ name: '点赞', num: likeNum }))
//   }
//   if (commentNum) {
//     ops.push(makeOp({ name: '评论', num: commentNum }))
//   }
//   if (collectNum) {
//     ops.push(makeOp({ name: '收藏', num: collectNum }))
//   }
//   return ops
// })
</script>

<style>
.blod {
  font-weight: 700;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
}
.ellipse {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.operators > li {
  @apply hover:text-sky-700;
}
</style>
