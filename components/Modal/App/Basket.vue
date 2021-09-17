<template lang="pug">
  ModalWrapper(name="basket")
    .modal-basket
      h2 Корзина

      .modal-basket__form
        UIButton(block disabled) Оформить заказ
        UIButton(to="#" block) Оформить заказ
        UIButton(light disabled) Оформить заказ
        UIButton(to="#" block light) Оформить заказ
        UIButton(accent disabled) Оформить заказ
        UIButton(to="#" accent) Оформить заказ
        UIInput(v-model="value" placeholder="3123" type="number")
        UIInput(v-model="value" placeholder="Что ищем?")
        UIInput(v-model="value" placeholder="Пароль" type="password" message="* Чисто подпись")
          img.icon(src="~/assets/icons/close-black.svg" alt="SearchIcon")
        UIInput(v-model="value" placeholder="Что ищем?" error="k.fnsdkf ks fksdh fsdf dksh f")


</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    return {
      value: ref('xx'),
    }
  },
})
</script>


<style lang="scss" scoped>
.modal-basket {
  height: 100%;
  padding: 30px 30px;

  .modal-basket__form {
    .button,
    .input {
      margin: 10px;
    }
  }
}
</style>

