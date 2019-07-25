<template>
  <!-- <v-flex
    sm12
    xs12
    md12
    lg12> -->
  <v-card
    class="mx-auto"
  >
    <v-card-title>I'm a title</v-card-title>
    <v-card-text>I'm card text</v-card-text>
    <v-card-actions>
      <v-btn>Click</v-btn>
    </v-card-actions>
  </v-card>
  <!-- </v-flex> -->
</template>
<script>
export default {
  props: {
    row: {
      type: Object,
      default: undefined
    }
  },
  mounted () {
    console.log(this.row)
  }
}
</script>
