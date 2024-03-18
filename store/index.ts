interface State {
  color: string
}

export const useGeneralStore = defineStore('general', {
  state: (): State => ({
    color: '34, 197, 94',
  }),
  persist: true,
})
