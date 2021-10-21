export const state = () => ({
  basket: [],
})

export const mutations = {
  set(state, basket) {
    state.basket = [...basket]
    save(state)
  },
  add(state, product) {
    state.basket = [...state.basket, product]
    save(state)
  },
  update(state, { index, field, value }) {
    state.basket[index][field] = value
    save(state)
  },
  remove(state, index) {
    state.basket = state.basket.filter((_, idx) => idx !== index)
    save(state)
  },
  clear(state) {
    state.basket = []
    save(state)
  },
}

export const actions = {
  nuxtClientInit({ commit }) {
    const item = localStorage.getItem('basket')
    const basket = item && removeOutdated(JSON.parse(item))
    basket && commit('set', basket)
  },
}

function save(state) {
  localStorage.setItem('basket', JSON.stringify(state.basket))
}

function removeOutdated(basket) {
  return basket.filter(
    (product) =>
      new Date(product.range.start) >
      new Date().setDate(new Date().getDate() - 1)
  )
}
