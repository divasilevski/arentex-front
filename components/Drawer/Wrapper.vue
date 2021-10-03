<template lang="pug">
  .drawer.closed(ref="drawerRef" :data-drawer="name")
    template(v-if="isShowContent")
      .drawer__bg(@click="closeHandler" v-overflow)
      .drawer__panel
        .drawer__header
          nuxt-link(to="/" @click.native="closeHandler")
            img.logo(src="~/assets/icons/logo.svg" alt="Arentex")
          .close(@click="closeHandler")
            img.icon(src="~/assets/icons/close.svg" alt="CloseIcon")
        slot(:closeHandler="closeHandler")
</template>

<script>
import {
  defineComponent,
  computed,
  useStore,
  watch,
  ref,
} from '@nuxtjs/composition-api'

const DURATION = 300

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const drawerRef = ref(null)
    const store = useStore()
    const isShow = computed(() => store.state.drawer[props.name])
    const isShowContent = ref(false)
    const closeHandler = () => store.commit('toggleDrawer', props.name)

    watch(isShow, (value) => {
      if (value) {
        isShowContent.value = true
        drawerRef.value.style.display = 'block'
        requestAnimationFrame(() => {
          drawerRef.value.classList.remove('closed')
          drawerRef.value.classList.add('opened')
        })
      } else {
        drawerRef.value.classList.remove('opened')
        drawerRef.value.classList.add('closed')
        setTimeout(() => {
          drawerRef.value.style.display = 'none'
          isShowContent.value = false
        }, DURATION)
      }
    })

    return {
      drawerRef,
      closeHandler,
      isShowContent,
    }
  },
})
</script>


<style lang="scss" scoped>
$duration: 0.3s;

.drawer {
  z-index: 100;
  position: fixed;
  @include filled;
  display: none;

  &.closed {
    pointer-events: none;
    .drawer__bg {
      opacity: 0;
      transition: opacity $duration;
    }
    .drawer__panel {
      transition: transform $duration ease-in-out;
      transform: translateX(100%);
    }
  }

  &.opened {
    pointer-events: unset;
    .drawer__bg {
      opacity: 0.7;
      transition: opacity $duration;
    }
    .drawer__panel {
      transition: transform $duration ease-in-out;
      transform: translateX(0%);
    }
  }

  .drawer__bg {
    position: fixed;
    @include filled;
    background: var(--main);
    opacity: 0;
    cursor: pointer;
  }

  .drawer__panel {
    position: fixed;
    @include filled;
    left: unset;
    min-width: 320px;
    width: 100%;
    max-width: 768px;
    box-shadow: -6px 0px 20px 0px rgba(0, 0, 0, 0.1);
    background: var(--white);
  }

  .drawer__header {
    padding: 0 30px;
    height: 80px;
    background: var(--main);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include mw(500px) {
      height: 60px;
    }

    .logo {
      height: 25px;
      width: 140px;

      @include mw(500px) {
        height: 18px;
        width: 100px;
      }
    }

    .close {
      cursor: pointer;
      position: relative;
      z-index: 101;

      &:hover {
        &:before {
          z-index: -1;
          position: absolute;
          content: ' ';
          width: 36px;
          height: 36px;
          border-radius: 36px;
          background: var(--selected);
          top: -7px;
          left: -7px;
        }
      }
    }
  }
}
</style>