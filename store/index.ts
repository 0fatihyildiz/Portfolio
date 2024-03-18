interface GeneralState {
  color: string
}

interface ModalState {
  contact: boolean
}

export const useGeneralStore = defineStore('general', {
  state: (): GeneralState => ({
    color: '34, 197, 94',
  }),
  persist: true,
})


export const useModalStore = defineStore('modals', {
  state: (): ModalState => ({
    contact: false
  })
})