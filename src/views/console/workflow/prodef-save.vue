<template>
  <ProdefForm @on-success="handleSubmit"/>
</template>
<script>
import ProdefForm from './prodef-form'
import { saveProdef } from '@/api/workflow'
export default {
  components: {
    ProdefForm
  },
  methods: {
    handleSubmit (data) {
      saveProdef(data).then(res => {
        if (res.data.ok) {
          this.$Message.info('成功')
        } else {
          this.$Message.error(res.data.message)
        }
      })
    }
  }
}
</script>
