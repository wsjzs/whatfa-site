<template>
  <NConfigProvider inline-theme-disabled :theme-overrides="themeOverrides">
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
        <div class="container-main--left">
          <slot></slot>
        </div>
        <div class="container-main--right">
          <slot name="right"></slot>
        </div>
      </div>

      <!-- <div class="container-right"> -->

      <!-- </div> -->
    </main>
  </NConfigProvider>
</template>
<script lang="ts" setup>
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'

interface IProps {
  title?: string
  description?: string
}
defineProps<IProps>()
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#48444138',
    primaryColorHover: '#59788082',
  },
  // Button: {
  //   textColor: '#FF0000',
  // },
  Pagination: {
    itemPaddingMedium: '0px',
  },
}
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
  font-family: '-apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif';
  background: #f6f6f6;
  font-size: 15px;
  padding: 0px;
  margin: 0;
}
#__nuxt {
  height: 100%;
}
.container-main {
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  /* flex-direction: row; */
}

.container-main--left {
  max-width: 694px;
}
.container-main--right {
  max-width: 296px;
}
</style>
