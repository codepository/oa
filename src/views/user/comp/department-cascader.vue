<template>
  <v-container>
    <Cascader
      :data="data"
      v-model="model"
      transfer
      change-on-select
      @on-change="handleChange"/>
  </v-container>
</template>
<script>
import { Cascader } from 'iview'
import { findDepartmentWithCompany } from '@/api/node'
import 'iview/dist/styles/iview.css'
export default {
  name: 'DepartmentCascader',
  components: {
    Cascader
  },
  props: {
    company: {
      type: String,
      default: ''
    },
    values: {
      type: String,
      default: ''
    },
    labels: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    values1: '', // 所选节点上溯所有value,逗号分割
    labels1: '', // 所选节点上溯所有label,逗号分割,
    model: [],
    data: []
  }),
  watch: {
    'company' (newval, oldval) {
      this.getDepartment(newval)
    },
    'values' (newval, oldval) { // 外部给 cascade赋值
      // console.log(newval)
      if (newval) {
        this.model = newval.split(',')
      } else {
        this.reset()
      }
    },
    values1 (newval, oldval) {
      this.$emit('update:values', newval)
    },
    labels1 (newval, oldval) {
      this.$emit('update:labels', newval)
    }
  },
  mounted () {

  },
  methods: {
    getDepartment (company) {
      if (company.length === 0) return
      findDepartmentWithCompany(company).then(res => {
        if (res.data) {
          this.data = res.data.map(row => {
            return this.transform(row)
          })
        }
      })
    },
    handleChange (value, selectedData) {
      // if (selectedData.length === 0) return
      this.values1 = ''
      this.labels1 = ''
      this.values1 = value.join(',')
      // console.log(this.values1)
      selectedData.forEach(row => {
        this.labels1 += row.label + '/'
      })
      this.labels1 = this.labels1.substr(0, this.labels1.length - 1)
    },
    reset () {
      this.model = []
      this.values1 = ''
      this.labels1 = ''
    },
    transform (row) {
      row.value = row.id
      row.label = row.title
      if (row.children.length > 0) {
        row.children.forEach(row => {
          this.transform(row)
        })
      }
      return row
    }
  }
}
</script>
