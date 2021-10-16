export const state = () => ({
  basket: [],
})

export const mutations = {
  set(state, basket) {
    state.basket = [...basket]
  },
  add(state, product) {
    state.basket = [...state.basket, product]
    save(state)
  },
  update(state, { index, field, value }) {
    state.basket[index][field] = value
    save(state)
  },
  remove(state, id) {
    state.basket = state.basket.filter((el) => el.id !== id)
    save(state)
  },
  clear(state) {
    state.basket = []
    save(state)
  },
}

export const actions = {
  nuxtClientInit({ commit }) {
    const basket = localStorage.getItem('basket')
    basket && commit('set', JSON.parse(basket))
  },
}

function save(state) {
  localStorage.setItem('basket', JSON.stringify(state.basket))
}
