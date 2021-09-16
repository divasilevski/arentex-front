<template lang="pug">
  .page.catalog.container
    .catalog__top
    .catalog__main
      CatalogFilter
      .catalog-grid
        .catalog-grid__sort
          | Популярные  |  Новинки  |  Сначала Дешёвые  |  Сначала Дорогие
        CatalogGrid
        .catalog-grid__pagination
          | ЗАГРУЗИТЬ ЕЩЁ
</template>

<style lang="scss" scoped>
.catalog {
  .catalog__top {
  }
  .catalog__main {
    display: flex;
  }

  .catalog__filters {
    width: 500px;
  }

  .catalog-grid {
    margin-left: 20px;
    width: 100%;
  }

  .catalog-grid__sort {
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    cursor: pointer;
  }

  .catalog-grid__pagination {
    display: flex;
    justify-content: center;
    padding-top: 30px;
  }
}
</style>