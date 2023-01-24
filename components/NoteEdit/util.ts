export function initMarkdownStyle(markdown) {
  console.log('markdown', markdown.value)
  const editArea = document.getElementsByClassName('v-md-editor__editor-wrapper')
  // 隐藏编辑区域
  // editArea.value[0].style.display = currentMode === 'editable' ? '' : 'none'
  markdown.value.toolbars.preview.action = () => {
    const { currentMode } = markdown.value
    console.log('currentMode', currentMode)

    markdown.value.currentMode = currentMode === 'edit' ? 'editable' : 'edit'
    // 隐藏编辑区域
    editArea[0].style.display = currentMode === 'editable' ? '' : 'none'
  }
  // console.log('query', editArea.value)
  initMdToolbarStyle()
}
function initMdToolbarStyle() {
  const toolbars = document.getElementsByClassName('v-md-editor__toolbar')
  const customStyle = {
    position: 'sticky',
    top: '0',
    zIndex: '999',
    background: 'white',
  }
  Object.assign(toolbars[0].style, customStyle)
}
