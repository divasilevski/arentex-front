import { useRoute, useRouter, computed } from '@nuxtjs/composition-api'

export function useQuery() {
  const route = useRoute()
  const router = useRouter()

  // -= Computed =-
  const query = computed(() => route.value.query)

  // -= Methods =-
  const changeQuery = (removed = [], added = {}, path = null) => {
    const query = JSON.parse(JSON.stringify(route.value.query))
    for (const key of removed) delete query[key]
    router.push({
      path: path || route.value.path,
      query: { ...query, ...added },
    })
  }

  return { query, changeQuery }
}
