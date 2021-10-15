export const api = {
  getProducts(axios) {
    return axios.$get('/product/')
  },
  getProductById(axios, id) {
    return axios.$get(`/product/${id}/`)
  },
}

export const asyncRequest = async (context, request, ...args) => {
  try {
    return await request(context.$axios, ...args)
  } catch (e) {
    context.error({ statusCode: e.response.status })
  }
}
