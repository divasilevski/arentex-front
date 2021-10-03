import Vue from 'vue'

Vue.directive('overflow', {
  bind() {
    const scroll = window.innerWidth - document.body.clientWidth
    document.body.style.cssText = `overflow: hidden; height: 100vh; margin-right: ${scroll}px;`
  },
  unbind() {
    document.body.style.cssText = ''
  },
})
