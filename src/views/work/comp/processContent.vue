<template>
  <material-card
    :title="proc.startUserId + '-' + proc.procDefName "
    :text="proc.startTime"
    color="green">
    <v-card-text>
      <v-layout
        v-for="(val, key) in item"
        :key="key"
        align-end
        wrap
      >
        <p>{{ key }}: {{ val }}</p>
      </v-layout>
    </v-card-text>
  </material-card>
</template>
<script>
import axios from '@/libs/api.request'
export default {
  name: 'ProcessContent',
  props: {
    proc: {
      type: Object,
      default: undefined
    }
  },
  data: () => ({
    proc1: '',
    item: {
      '流程类型': '测试'
    },
    maps: new Map()
  }),
  watch: {
    'proc': {
      handler (newval) {
        this.proc1 = newval
        this.getDatas()
      },
      deep: true
    }
  },
  mounted () {
    this.maps.set('请假1', 'http://129.0.97.23:31380/advitem/findById/')
  },
  methods: {
    getDatas () {
      if (this.maps.get(this.proc1.procDefName) === undefined) {
        this.$Message.error('请先在 mounted 里配置【' + this.proc1.procDefName + '】的查询url')
        return
      }
      axios.request({
        url: this.maps.get(this.proc1.procDefName) + this.proc1.id,
        method: 'get'
      }).then(res => {
        this.item = res.data
      })
    }
  }
}
</script>
