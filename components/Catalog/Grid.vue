<template lang="pug">
  .catalog-grid
    CatalogCard
    CatalogCard
    CatalogCard
    CatalogCard
    CatalogCard
    CatalogCard
    CatalogCard
    CatalogCard
    CatalogCard
    CatalogCard
    CatalogCard
    CatalogCard

</template>

<style lang="scss" scoped>
.catalog-grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
</style>