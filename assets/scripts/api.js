export const api = {
  getProducts(axios) {
    return axios.$get('/product/')
  },
  getProductById(axios, id) {
    return axios.$get(`/product/${id}/`)
  },
  getCategories(axios) {
    return axios.$get(`/category/`)
  },
}

export const asyncRequest = async (context, request, ...args) => {
  try {
    if (Array.isArray(request)) {
      const requests = request.map((req) => req(context.$axios))
      return await Promise.all(requests)
    }
    return await request(context.$axios, ...args)
  } catch (e) {
    context.error({ statusCode: e.response.status })
  }
}
