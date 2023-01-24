import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: { nickname: 'marks', avatar: 'https://s1.ax1x.com/2022/08/04/vmM5bn.jpg' },
    }
  },
})
