<template lang="pug">
  .error-page
    nuxt-link.logo-box(to="/")
      img.logo-box__img(src="~/assets/icons/logo-black.svg" alt="Arentex")
      .logo-box__line
      .logo-box__error ОШИБКА {{ error.statusCode || '' }}

    .decription
      span(v-if="error.statusCode === 400") Запрос не может быть понят сервером из-за неправильного синтаксиса
      span(v-if="error.statusCode === 401") Запрос требует аутентификации пользователя
      span(v-if="error.statusCode === 403") Сервер понял запрос, но отказывается выполнять его
      span(v-if="error.statusCode === 404") Неправильно набран адрес или такой страницы на сайте больше не существует
      span(v-if="error.statusCode === 500") Сервер столкнулся с непредвиденным условием, которое не позволяет ему выполнить запрос
      span(v-if="error.statusCode === 501") Сервер не поддерживает функциональность, необходимую для выполнения запроса
      span(v-if="error.statusCode === 503") Сервер в настоящее время не в состоянии обработать запрос из-за временной перегрузки или техобслуживания

      nuxt-link.only-not-desktop(to="/") Главная страница

</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
})
</script>

<style lang="scss" scoped>
.error-page {
  height: 100vh;

  .logo-box {
    position: absolute;
    top: calc(50% - 160px);
    left: calc(50% - 160px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 320px;
    border: 4px solid var(--main);

    &:hover {
      transform: rotate(1deg);
    }

    .logo-box__img {
      height: 36px;
      width: 200px;
    }

    .logo-box__line {
      width: 205px;
      height: 2px;
      background: var(--main);
      margin: 12px 0;
    }

    .logo-box__error {
      font-size: 24px;
      line-height: 28px;
    }
  }

  .decription {
    position: absolute;
    top: calc(50% + 180px);
    left: calc(50% - 150px);
    width: 300px;
    text-align: center;

    .only-not-desktop {
      display: block;
      margin-top: 10px;
      text-decoration-line: underline;
    }
  }
}
</style>
