<template lang="pug">
  .modal.closed(ref="modalRef" :data-modal="name")
    template(v-if="isShowContent")
      .modal__bg(@click="closeHandler")
      .modal__panel
        .close(@click="closeHandler")
          img(src="~/assets/icons/close-black.svg")
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

const DURATION = 250

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const modalRef = ref(null)
    const store = useStore()
    const isShow = computed(() => store.state.modal[props.name])
    const isShowContent = ref(false)
    const closeHandler = () => store.commit('toggleModal', props.name)

    watch(isShow, (value) => {
      if (value) {
        isShowContent.value = true
        modalRef.value.style.display = 'flex'
        requestAnimationFrame(() => {
          modalRef.value.classList.remove('closed')
          modalRef.value.classList.add('opened')
        })
      } else {
        modalRef.value.classList.remove('opened')
        modalRef.value.classList.add('closed')
        setTimeout(() => {
          modalRef.value.style.display = 'none'
          isShowContent.value = false
        }, DURATION)
      }
    })

    return { modalRef, closeHandler, isShowContent }
  },
})
</script>

<style lang="scss" scoped>
$duration: 0.25s;

.modal {
  position: fixed;
  z-index: 100;
  @include filled;
  display: none;
  align-items: center;
  justify-content: center;

  &.closed {
    pointer-events: none;
    .modal__bg {
      opacity: 0;
      transition: opacity $duration;
    }
    .modal__panel {
      transition: transform $duration ease-in-out;
      transform: translateY(-100%);
    }
  }

  &.opened {
    pointer-events: unset;
    .modal__bg {
      opacity: 0.7;
      transition: opacity $duration;
    }
    .modal__panel {
      transition: transform $duration ease-in-out;
      transform: translateY(0%);
    }
  }

  .modal__bg {
    position: fixed;
    @include filled;
    background: var(--main);
    opacity: 0;
    cursor: pointer;
  }

  .modal__panel {
    position: relative;
    background: var(--white);
    min-width: 320px;
    max-width: 768px;
    width: 100%;
    height: 80%;
    margin: 100px 30px;
    box-shadow: -6px 0px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    .close {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      z-index: 101;

      &:hover {
        &:before {
          z-index: -1;
          position: absolute;
          content: ' ';
          width: 36px;
          height: 36px;
          border-radius: 36px;
          background: var(--light-gray);
          top: -7px;
          left: -7px;
        }
      }
    }
  }
}
</style>