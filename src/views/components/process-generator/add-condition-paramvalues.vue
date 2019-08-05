<template>
  <v-textarea
    v-model="value1"
    outlined
    name="input-7-4"
    label="参数值"
  ><slot><v-icon slot="prepend">mdi-apple-finder</v-icon></slot></v-textarea>
</template>
<script>
export default {
  props: {
    value: {
      type: Array,
      default: undefined
    }
  },
  data: () => ({
    value1: ''
  }),
  watch: {
    'value' (val) {
      this.value1 = val.join(',')
    },
    value1 (val) {
      this.$emit('update:value', val.split(','))
    }
  }
}
</script>
