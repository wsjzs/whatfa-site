<template>
  <div class="w-full">
    <h1 v-if="title" class="text-gray-600 text-sm mb-1">{{ title }}</h1>
    <div :class="['border-b pb-1 flex mb-4 items-center', { 'border-b-sky-500': isFocus }]">
      <input
        :value="modelValue"
        :placeholder="placeholder"
        class="flex-1 p-0 h-8"
        type="text"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
      />
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue'])
// 输入框是否获得焦点
const isFocus = ref(false)
const handleFocus = () => {
  isFocus.value = true
  console.log('handleFocus')
}
const handleBlur = () => {
  isFocus.value = false
  console.log('handleBlur')
}
const handleChange = event => {
  console.log(event)
}
const handleInput = (event: Event) => {
  console.log(event.target.value)
  emit('update:modelValue', event.target.value)
}
</script>
