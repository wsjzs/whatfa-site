export interface INoteListItemData {
  title: string
  id: string
  commentNum: number
  likeNum: number
  collectNum: number
  imageUrl: string
  content: string
  type: number
  ownerId: number
  nickname: string
  signature: string
  avatar: string
}
export interface INoteListData {
  notes: INoteListItemData[]
}
export interface IGetNotesParam {
  searchContent: string
  pageSize: number
  pageNum: number
}

export function getNotes(_: IGetNotesParam): INoteListData {
  // console.log('getNotes payload:', payload)

  const notes = []
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      notes.push({
        title: '大菠萝！这一次彻底搞懂Pinia！（保姆级教程）',
        id: i,
        imageUrl: 'https://static-cse.canva.cn/blob/26371/still-life-4440762_1920.jpg',
        likeNum: 10,
        collectNum: 20,
        commentNum: 13,
        content: '我在测试我的艾迪我在测试我的艾迪我在测试我的艾迪我在测试我的艾迪我在测试我的艾迪我在测试我的艾迪',
        type: 0,
        ownerId: 10,
        nickname: '好好玩儿',
        signature: '你在哪里呀',
        avatar: 'https://s1.ax1x.com/2022/08/04/vmM5bn.jpg',
      })
    } else {
      notes.push({
        title: '无敌种草',
        id: i,
        imageUrl: null,
        likeNum: 10,
        collectNum: 20,
        commentNum: 13,
        content: '我在测试我的艾迪我在测试我的艾迪我在测试我的艾迪我在测试我的艾迪我在测试我的艾迪我在测试我的艾迪',
        type: 0,
        ownerId: 10,
        nickname: '我的大太阳',
        signature: i % 3 === 0 ? '话逻辑性强，思维缜密的人，大多有读书的习惯。' : '今天下雨了',
        avatar: 'https://s1.ax1x.com/2022/08/04/vmMage.jpg',
      })
    }
  }
  return {
    notes,
  }
}
