<template>
  <v-container>
    <material-cascader
      :value.sync="value1"
      :label.sync="label1"
      :data="data"/>
  </v-container>
</template>
<script>
import { findDepartmentWithCompany } from '@/api/node'
export default {
  name: 'DepartmentCascader',
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
    'company' (newval, oldval) {
      this.getDepartment(newval)
    },
    'label' (newval) { // 外部给 cascade赋值
      this.label1 = newval
    },
    value1 (newval, oldval) {
      this.$emit('update:value', newval)
    },
    label1 (newval, oldval) {
      this.$emit('update:label', newval)
    }
  },
  mounted () {

  },
  methods: {
    getDepartment (company) {
      console.log(company)
      if (company.length === 0) return
      findDepartmentWithCompany(company).then(res => {
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
