<template>
  <NConfigProvider inline-theme-disabled>
    <main class="main">
      <Head>
        <Title>{{ title }}</Title>
        <Meta name="description" :content="description" />
        <Meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
        ></Meta>
        <!-- <Meta name="keywords" :content="keywords"></Meta> -->
        <!-- <Style type="text/css" children="body { background-color: green; }"></Style> -->
      </Head>
      <!-- <TopBar>
      <div>I'd inserted into the top</div>
    </TopBar> -->
      <div class="container-main">
        <slot></slot>
      </div>
      <div class="container-right">
        <slot name="right"></slot>
      </div>
    </main>
  </NConfigProvider>
  <!-- <n-config-provider :theme="theme"> -->
  <!-- <n-theme-editor> -->

  <!-- <n-global-style /> -->
  <!-- </n-theme-editor> -->
  <!-- </n-config-provider> -->
</template>
<script lang="ts">
// import { NConfigProvider } from 'naive-ui'
// import type { GlobalTheme } from 'naive-ui'
// import TopBar from './common/TopBar.vue'
export default defineComponent({
  components: {
    // TopBar
    // NConfigProvider,
  },
  props: {
    // 标题
    title: {
      type: String,
      default: 'whatfa',
    },
    description: {
      type: String,
      default: 'whatfa includes a large of quesions which you want',
    },
  },
  setup() {
    // const theme = ref<GlobalTheme | null>(null)
    // theme.value = darkTheme
    return {
      // theme,
      // NCard,
      // NSpace,
      // NGlobalStyle,
    }
  },
})
</script>

<style>
html {
  height: 100%;
  /* background-color: black; */
  /* @apply bg-gray-100; */
}

body {
  /* height: 100%; */
  /* font-family: 'Helvetica Neue', 'Luxi Sans', 'DejaVu Sans', 'Segoe UI', 'Hiragino Sans GB', 'Microsoft Yahei',
    sans-serif; */
}
#__nuxt {
  height: 100%;
}
.container-main {
  max-width: 694px;
}
</style>
