<template lang="pug">
  .toast-list
    transition-group(name="list" tag="div")
      ToastCard(
        v-for="(toast, index) in toasts"
        :key="'toast-' + toast.id"
        :text="toast.text"
        :duration="3000"
        @click.native="remove(index)"
        @timeout="remove(index)")

</template>

<script>
import { computed, defineComponent, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const store = useStore()

    // -= Computed =-
    const toasts = computed(() => store.state.toast.list)

    // -= Methods =-
    const remove = (index) => {
      store.commit('toast/remove', index)
    }

    return { toasts, remove }
  },
})
</script>


<style lang="scss" scoped>
.toast-list {
  position: fixed;
  z-index: 90;
  bottom: 15px;
  right: 10px;

  .toast-card {
    margin-top: 10px;

    @include mw(374px) {
      bottom: 5px;
      min-width: 250px;
      max-width: 250px;
    }
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s;
  }
  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateX(300px);
  }
}
</style>