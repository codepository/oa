<template>
  <v-card
    width="150"
    height="80"
    class="mx-auto"
  >
    <p
      style="background-color: coral;"><v-icon>mdi-account</v-icon>{{ type }}</p>
    <p>{{ text1 }}<span style="float:right;"><v-icon>mdi-arrow-right</v-icon></span></p>
  </v-card>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: '审批人'
    },
    text: {
      type: String,
      default: '请选择'
    }
  },
  computed: {
    text1 () {
      return this.text.length > 8 ? this.text.substring(0, 6) + '..' : this.text
    }
  }
}
</script>
