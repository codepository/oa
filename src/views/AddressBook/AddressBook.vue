<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      wrap>
      <!-- 操作 -->
      <Operations/>
    </v-layout>
  </v-container>
</template>
<script>
import Operations from '@/views/AddressBook/comp/Operations'
export default {
  components: {
    Operations
  },
  data () {
    return {

    }
  }
}
</script>
