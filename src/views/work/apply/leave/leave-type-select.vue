<template>
  <v-autocomplete
    v-model="item"
    :items="items"
    label="选择请假类型"
    required
    @change="change"
  ><v-icon slot="prepend">mdi-account</v-icon></v-autocomplete>
</template>
<script>
export default {
  name: 'LeaveTypeSelect',
  props: {
    value: {
      type: String,
      default: undefined
    }
  },
  data: () => ({
    isLoading: false,
    items: [
      '事假',
      '病假',
      '婚假',
      '产假',
      '陪产假',
      '丧假',
      '调休假'
    ],
    item: '',
    search: null,
    required: [
      v => !!v || '不能为空'
    ]
  }),
  methods: {
    change (value) {
      this.item = value
      // console.log(this.user)
      this.$emit('update:value', this.item)
    }
  }
}
</script>
