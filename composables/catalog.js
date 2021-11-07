import { useQuery } from '~/composables/query'

export function useCatalog() {
  const { changeQuery } = useQuery()

  // -= Query Methods =-
  const queryTag = (removed) => {
    changeQuery(['page', removed])
  }
  const queryPage = (page) => {
    changeQuery([], { page })
  }
  const queryPrice = (prices, { min, max }) => {
    const added = {}
    console.log(prices[0], min)
    if (prices[0] !== min) added.minprice = prices[0]
    if (prices[1] !== max) added.maxprice = prices[1]
    Object.keys(added).length && changeQuery([], added)
  }
  const querySearch = (searchString) => {
    changeQuery(
      ['page', 'category', 'subcategory', 'maxprice', 'minprice'],
      { search: searchString },
      '/catalog'
    )
  }
  const queryCategory = (id) => {
    changeQuery(['page', 'subcategory', 'search'], { category: id })
  }
  const querySubcategory = (id) => {
    changeQuery(['page', 'category', 'search'], { subcategory: id })
  }

  // -= Other Methods =-
  const toHumanTags = ([key, value], { categories, subcategories }) => {
    switch (key) {
      case 'category':
        const category = categories.find((cat) => `${cat.id}` === value)
        return { key, value: (category && category.name) || null }
      case 'subcategory':
        const subcategory = subcategories.find((cat) => `${cat.id}` === value)
        return { key, value: (subcategory && subcategory.name) || null }
      case 'minprice':
        return { key, value: 'не менее ' + value + ' ₽' }
      case 'maxprice':
        return { key, value: 'до ' + value + ' ₽' }
      case 'search':
        return { key, value }
      default:
        // Ignore other tags
        return { key, value: null }
    }
  }

  return {
    queryTag,
    queryPage,
    queryPrice,
    querySearch,
    queryCategory,
    querySubcategory,

    toHumanTags,
  }
}
