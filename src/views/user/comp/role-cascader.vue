<template>
  <v-container>
    <material-cascader
      :value.sync="value1"
      :label.sync="label1"
      :data="data"/>
  </v-container>
</template>
<script>
import { findAllRoletreeAstree } from '@/api/roletree'
export default {
  name: 'RoleCascader',
  props: {
    company: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    value1: '', // 所选节点上溯所有value,逗号分割
    label1: '', // 所选节点上溯所有label,逗号分割,
    model: [],
    data: []
  }),
  watch: {
    'label' (newval) { // 外部给 cascade赋值
      this.label1 = newval
    },
    value1 (newval, oldval) {
      this.$emit('update:value', newval)
    },
    label1 (newval, oldval) {
      // console.log(newval)
      this.$emit('update:label', newval)
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      findAllRoletreeAstree({
        company: this.$store.state.user.company
      }).then(res => {
        this.data = res.data
      })
    },
    reset () {
      this.values1 = ''
      this.labels1 = ''
    }
  }
}
</script>
