<template>
  <v-select
    v-model="valuecurrent"
    :items="companys"
    :rules="required"
    filled
    label="公司或单位"
    class="purple-input"/>
</template>
<script>
export default {
  name: 'ComapanySelect',
  props: {
    rules: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    companys: ['福州日报社'],
    valuecurrent: ''
  }),
  watch: {
    'value' (newval, oldval) {
      this.valuecurrent = newval
    },
    valuecurrent (newval, oldval) {
      this.$emit('update:value', newval)
    }
  }
}
</script>
