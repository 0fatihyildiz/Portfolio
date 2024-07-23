import { createClient } from '@postiva/client'

export default defineNuxtPlugin((_nuxtApp) => {
  const config = useRuntimeConfig()

  const postiva = createClient({
    apiKey: config.public.postivaApiKey,
    workspaceId: config.public.postivaWorkspaceID,
  })

  return {
    provide: {
      postiva,
    },
  }
})
