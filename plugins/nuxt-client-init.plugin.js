export default (context) => {
  const actions = context.store._actions
  if (actions) {
    Object.keys(actions).map(async (action) => {
      if (action.includes('nuxtClientInit')) {
        await context.store.dispatch(action, context)
      }
    })
  }
}
