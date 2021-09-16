import Vue from 'vue'

Vue.directive('collapse', {
  bind(el, binding) {
    el.style.transition = `height ${+binding.arg || 200}ms ease-in-out`
    el.style.height = binding.value ? 'auto' : '0px'
    el.style.overflow = 'hidden'
    el.timer = null
  },
  update(el, binding) {
    requestAnimationFrame(() => {
      el.timer && clearTimeout(el.timer)
      el.style.height = el.scrollHeight + 'px'

      requestAnimationFrame(() => {
        if (binding.value) {
          const setAuto = () => (el.style.height = 'auto')
          el.timer = setTimeout(setAuto, +binding.arg || 200)
        } else {
          el.style.height = '0px'
        }
      })
    })
  },
})
