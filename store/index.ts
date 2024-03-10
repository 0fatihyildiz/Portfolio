interface State {
  color: string
}

export const useGeneralStore = defineStore('general', {
  state: (): State => ({
    color: '239, 68, 68',
  }),
  persist: true,
})
