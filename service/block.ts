export interface IBlocksData {
  total?: number
  blocks?: { name: string; type: string }[]
}

export function getBlocks(): IBlocksData {
  return {
    total: 10,
    blocks: [
      {
        name: '全部',
        type: 'all',
      },
      {
        name: '最热',
        type: 'hot',
      },
      {
        name: '日常',
        type: 'daily',
      },
      {
        name: '招聘',
        type: 'recruit',
      },
    ],
  }
}
