export const api = {
  getProducts(axios) {
    return axios.$get('/product')
  },
}
