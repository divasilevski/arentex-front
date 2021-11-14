import { useStore } from '@nuxtjs/composition-api'

export function useToast() {
  const store = useStore()

  // -= Methods =-
  const push = (text) => store.commit('toast/add', { text })

  return { push }
}
