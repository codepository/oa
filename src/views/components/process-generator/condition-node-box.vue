<template>
  <v-card
    width="150"
    height="80"
    class="mx-auto"
  >
    <p style="color:green;margin:5px;">条件{{ value }}</p>
    <p style="margin:5px;">{{ text.length > 8 ? text.substring(0, 6) + '..' : text }}<span style="float:right;"><v-icon>mdi-arrow-right</v-icon></span></p>
  </v-card>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    },
    text: {
      type: String,
      default: '请设置条件'
    }
  }
}
</script>
