import { computed, useStore } from '@nuxtjs/composition-api'
import { getDaysCount } from '~/assets/scripts/date'

export function useBasket() {
  const store = useStore()

  // -= Computed =-
  const basket = computed(() => store.state.basket.basket)

  const total = computed(() =>
    basket.value.reduce((sum, product) => {
      const start = new Date(product.range.start)
      const end = new Date(product.range.end)
      return sum + product.price * product.count * getDaysCount(start, end)
    }, 0)
  )

  // -= Methods =-
  const remove = (index) => {
    store.commit('basket/remove', index)
  }

  const plus = (index) => {
    const value = basket.value[index].count + 1
    store.commit('basket/update', { index, field: 'count', value })
  }

  const minus = (index) => {
    const value = basket.value[index].count - 1
    store.commit('basket/update', { index, field: 'count', value })
  }

  const changeDates = (index, range) => {
    store.commit('basket/update', { index, field: 'range', value: range })
  }

  const clear = () => store.commit('basket/clear')

  const expand = (index) => {
    const product = basket.value[index]
    const start = new Date(product.range.start)
    const end = new Date(product.range.end)
    const days = getDaysCount(start, end)
    const total = product.count * product.price * days
    return { days, total }
  }

  return {
    basket,
    total,
    remove,
    plus,
    minus,
    changeDates,
    clear,
    expand,
  }
}
