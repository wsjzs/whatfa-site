<template>
  <NuxtLayout name="app-layout" title="注册">
    <div class="container mt-0 sm:mt-2 my-2 rounded mx-auto bg-light-50 p-4">
      <form>
        <h1 class="mb-4">注册新用户</h1>
        <PropItem v-model="formData.username" title="用户名" placeholder="用户名"></PropItem>
        <PropItem v-model="formData.email" title="邮箱" placeholder="用户名"></PropItem>
        <PropItem v-model="formData.code" title="验证码" placeholder="用户名">
          <template #right>
            <div class="ml-1 cursor-pointer text-blue-400 hover:text-gray-300 select-none" @click="handleGetCode">
              发送验证码
            </div>
          </template>
        </PropItem>
        <PropItem v-model="formData.password" title="密码" placeholder="用户名"></PropItem>
        <input type="submit" value="确认注册" @click.prevent="handleSubmit" />
      </form>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import PropItem from '~~/components/common/PropItem/PropItem.vue'
import { getCode } from '~~/service/user.js'
const formData = reactive({
  username: '',
  email: '',
  code: '',
  password: '',
})
const handleSubmit = () => {}
// 获取验证码
const handleGetCode = () => {
  getCode()
}
</script>
