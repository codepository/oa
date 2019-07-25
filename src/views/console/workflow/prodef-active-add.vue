<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap>
      <v-flex
        sm12
        xs12
        md12
        lg12>
        <CBtn/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import CBtn from '@/views/components/process-generator/index.vue'
export default {
  components: {
    CBtn
  },
  data: () => ({
  })
}
</script>
