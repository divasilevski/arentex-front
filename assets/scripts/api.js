export const api = {
  getProducts(axios) {
    return axios.$get('/product')
  },
  getProductById(axios, id) {
    return axios.$get(`/product/${id}`)
  },
}
