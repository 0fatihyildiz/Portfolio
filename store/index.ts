interface GeneralState {
  color: string
  isLoading: boolean
}

export const useGeneralStore = defineStore('general', {
  state: (): GeneralState => ({
    color: '217, 70, 239',
    isLoading: false,
  }),
  persist: true,
})
