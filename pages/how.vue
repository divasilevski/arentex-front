<template lang="pug">
  .page.container
    h1 Как происходит аренда оборудования?
    h3.h3 1. Добавление в корзину
    p Выберите необходимое оборудование на сайте, настройте дату аренды и добавьте товар в корзину.
    h3.h3 2. Оформление заказа
    p Перейдите к оформлению заказа, заполните информацию о себе и выберите удобный способ получения.
    h3.h3 3. Оплатите заказ
    p Картой онлайн или при встрече с курьером. Мы вышлем вам на почту чек и договор.
    h3.h3 4. Дождитесь доставку
    p Курьер доставит оборудование в удобное для вас время.
    h3.h3 5. Пользуйтесь
    p Прокатитесь на самокате, поиграйте в приставку, съездите в горы, используйте ваш заказ по назначению.
    h3.h3 6. Продлите или завершите аренду
    p Мы свяжемся с вами, чтобы уточнить когда курьер сможет забрать товар.

    h1.h1 Вопросы и ответы
    h3.h3 На какой минимальный срок можно взять в аренду вещь?
    p На одни сутки.
    h3.h3 Можно ли сократить срок аренды и вернуть вещь?
    p Да, для этого свяжитесь с нами #[span.link(v-html="contacts.email")]. Мы заберм оборудование и вернем вам средства.

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
