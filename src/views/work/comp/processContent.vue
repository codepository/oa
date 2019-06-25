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
      '申请人': '测试测试测试测试测试测试测试测试测试测试测试测试测试999999999999999999999',
      '申请日期': 'xxxxxx',
      '内容': '我是内容',
      '申请人1': '测试1',
      '申请日期1': 'xxxxxx',
      '内容1': '我是内容',
      '申请人2': '测试1',
      '申请日期2': 'xxxxxx',
      '内容2': '我是内容',
      '申请人4': '测试1',
      '申请日期4': 'xxxxxx',
      '内容4': '我是内容',
      '申请人3': '测试1',
      '申请日期3': 'xxxxxx',
      '内容3': '我是内容'
    }
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
  methods: {
    getDatas () {
      switch (this.proc1.procDefName) {
        default:
          this.$Message.error('请设置【' + this.proc1.procDefName + '】流程内容查询的url')
      }
    }
  }
}
</script>
