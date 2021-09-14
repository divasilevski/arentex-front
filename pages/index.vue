<template lang="pug">
  .container 
    h1 Lorem

</template>




<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    return {
      welcome: 'Всем приветик)))',
    }
  },
})
</script>
