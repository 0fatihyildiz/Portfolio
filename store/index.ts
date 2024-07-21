interface GeneralState {
  color: string
}

export const useGeneralStore = defineStore('general', {
  state: (): GeneralState => ({
    color: '217, 70, 239',
  }),
  persist: true,
})
