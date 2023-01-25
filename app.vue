<!-- <template>
  <div>
    <NuxtWelcome />
  </div>
</template> -->
<template>
  <div>
    <Head>
      <!-- <Script src="https://kit.fontawesome.com/fa967c5d0c.js" crossorigin="anonymous" /> -->
      <!-- <Link href="/fontawesome/css/all.css" rel="stylesheet" /> -->
    </Head>
    <!-- <AppLayout> -->
    <NuxtLayout>
      <NuxtPage></NuxtPage>
      <template #right>
        <div>right</div>
      </template>
    </NuxtLayout>

    <!-- </AppLayout> -->
  </div>
</template>

<script lang="ts" setup>
// import AppLayout from '~~/layouts/AppLayout.vue'
</script>
