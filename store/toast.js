import { generateId } from '../assets/scripts/utils'

export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, toast) {
    const newToast = { id: generateId(), ...toast }
    state.list = [...state.list, newToast]
  },
  remove(state, index) {
    state.list = state.list.filter((_, idx) => idx !== index)
  },
}
