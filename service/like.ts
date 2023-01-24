import { LIKE_TYPE } from '~~/const/like'

export function like(payload: { type: number; itemId: string }) {
  return { success: true } || payload
}
export function cancelLike(payload: { type: number; itemId: string }) {
  return { success: true } || payload
}
// 赞笔记
export function likeNote(noteId: string) {
  console.log('likeNote')

  return like({
    itemId: noteId,
    type: LIKE_TYPE.NOTE,
  })
}

// 赞评论
export function likeComment(commentId: string) {
  return like({
    itemId: commentId,
    type: LIKE_TYPE.COMMENT,
  })
}
// 赞回复
export function likeReply(replyId: string) {
  return like({
    itemId: replyId,
    type: LIKE_TYPE.REPLY,
  })
}

// 撤销赞笔记
export function cancelLikeNote(noteId: string) {
  return cancelLike({
    itemId: noteId,
    type: LIKE_TYPE.NOTE,
  })
}
// 撤销赞回复
export function cancelLikeReply(replyId: string) {
  return cancelLike({
    itemId: replyId,
    type: LIKE_TYPE.REPLY,
  })
}
