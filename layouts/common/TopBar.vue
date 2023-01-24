<template>
  <header class="border-b bg-light-50">
    <nav class="container flex w-full xl:px-56 lg:px-24 md:px-16 h-55px items-center mx-auto">
      <div class="text-xl ml-1 text-sky-600 sm:text-2xl flex-shrink-0 cursor-pointer">
        <NuxtLink class="no-underline" to="/all">小润书</NuxtLink>
      </div>
      <ul class="flex w-80 justify-around">
        <li
          v-for="(navItem, index) in navTitles"
          :key="index"
          :class="[
            'cursor-pointer hover:font-medium select-none flex-shrink-0',
            { 'font-medium border-b-2 border-b-sky-500': selectedNavIndex === index },
          ]"
          @click="handleNavClick(index)"
        >
          <NuxtLink :to="navItem.href">
            {{ navItem.title }}
          </NuxtLink>
        </li>
      </ul>

      <div class="flex flex-shrink-0 items-center cursor-pointer ml-auto pl-2">
        <form class="flex items-center border rounded-4xl px-2 hidden sm:block">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              id="simple-search"
              type="text"
              class="text-gray-900 text-sm block pl-5 p-0 m-1"
              placeholder="小润书，人生无限可能"
              required
            />
          </div>
        </form>

        <div class="operators items-center flex justify-end ml-auto">
          <!-- 搜索 -->
          <NuxtLink to="/edit" class="">
            <i class="fa-solid fa-magnifying-glass"></i>
          </NuxtLink>
          <!-- 发帖 -->
          <NuxtLink to="/edit" class="">
            <i class="fa-solid fa-plus"></i>
          </NuxtLink>
          <!-- 消息 -->
          <NuxtLink to="/edit" class="">
            <i class="fa-solid fa-bell"></i>
          </NuxtLink>
          <!-- </div> -->
        </div>
        <NuxtLink class="flex items-center" to="/sign_up">
          <!-- 头像 -->
          <div class="mx-1">
            <img class="h-6 w-6 rounded-full" :src="user.avatar" alt="tie" />
          </div>
          <!-- 昵称 -->
          <div class="hidden sm:flex flex items-center mr-1">
            <span>{{ user.nickname }}</span>
          </div>
          <i class="mr-2 fa-solid fa-caret-down"></i>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
<script lang="ts">
// import { NIcon } from 'naive-ui'

import { useUserStore } from '~~/store/user'

// import { GameControllerOutline } from '@vicons/ionicons5'
export default defineComponent({
  name: 'TopBar',
  components: {
    // NEl,
    // NSpace,
    // NButton,
    // NInput,
    // GameControllerOutline,
    // NIcon,
  },
  setup() {
    const userStore = useUserStore()
    const user = computed(() => userStore.user)
    const navTitles = ref([
      { title: '首页', href: '/all' },
      { title: '招聘优选', href: '/employ' },
      { title: '发现', href: '/discovery' },
    ])
    const selectedNavIndex = ref(0)
    const handleNavClick = (index: number) => {
      selectedNavIndex.value = index
    }
    return {
      navTitles,
      selectedNavIndex,
      user,
      handleNavClick,
    }
  },
})
</script>
<style>
.deep {
  @apply;
}
.operators a {
  @apply mx-2;
}
</style>
