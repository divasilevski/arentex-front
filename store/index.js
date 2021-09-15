export const state = () => ({
  drawer: {
    menu: false,
    basket: false,
    search: false,
  },
  modal: {
    basket: false,
    search: false,
  },
})

export const mutations = {
  toggleDrawer(state, name) {
    state.drawer[name] = !state.drawer[name]
  },
  toggleModal(state, name) {
    state.modal[name] = !state.modal[name]
  },
}
