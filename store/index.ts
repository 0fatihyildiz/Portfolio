interface State {
  color: string
}

export const useGeneralStore = defineStore('general', {
  state: (): State => ({
    color: '168, 85, 247',
  }),
  persist: true,
})
