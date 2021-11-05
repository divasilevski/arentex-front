import { screenMore } from '../assets/scripts/utils'

export const state = () => ({
  drawer: {
    menu: false,
    basket: false,
    auth: false,
  },
  modal: {
    basket: false,
    auth: false,
  },
})

export const mutations = {
  toggleDrawer(state, name) {
    state.drawer[name] = !state.drawer[name]
  },
  toggleModal(state, name) {
    state.modal[name] = !state.modal[name]
  },
  toggleOverlay(state, name) {
    const isModal = screenMore(1024)
    const isOpen = state.drawer[name] || state.modal[name]

    state.modal[name] = isModal && !isOpen
    state.drawer[name] = !isModal && !isOpen
  },
}
