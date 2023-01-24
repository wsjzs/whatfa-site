<template>
  <div class="my-4">
    <v-md-editor
      ref="markdown"
      v-model="text"
      mode="edit"
      :disabled-menus="[]"
      @upload-image="handleUploadImage"
    ></v-md-editor>
  </div>
</template>

<script lang="ts" setup>
import { initMarkdownStyle } from './util.js'

const markdown = ref<HTMLDivElement>()
const str = `
hello
# h
![Description](https://s1.ax1x.com/2022/08/04/vmM5bn.jpg)
`
const text = ref(str)
const handleUploadImage = (event, insertImage, files) => {
  // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
  console.log(files)
  console.log(event)

  const reader = new FileReader()
  reader.readAsDataURL(files[0])
  reader.onload = e => {
    console.log('base64:', e)
  }

  // 此处只做示例
  insertImage({
    url: 'https://s1.ax1x.com/2022/08/04/vmM5bn.jpg',
    desc: '七龙珠',
    width: '200',
    height: '200',
  })
}

onMounted(() => {
  initMarkdownStyle(markdown)
})
</script>
