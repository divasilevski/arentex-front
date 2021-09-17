<template lang="pug">
  .page.container
    h1 Зарабатывайте вместе с нами

    p Хочешь выставить в прокат свои вещи? Мы работаем вместе с сервиcом #[span.link(v-html="contacts.partners")]. Данный сервис специально разработан для прокатной индустрии с учетом всех особенностей и специфики оборудования.
    p Есть предложения или пожелания? Пиши нам на почту #[span.link(v-html="contacts.email")].

</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { contacts } from '~/assets/scripts/contacts.js'

export default defineComponent({
  setup() {
    return { contacts }
  },
})
</script>