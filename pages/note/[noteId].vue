<template>
  <NuxtLayout name="app-layout">
    <div class="my-2">
      <v-md-editor v-model="text" mode="preview"></v-md-editor>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { readme } from './config.js'

const str = readme
const text = ref(str)
</script>
