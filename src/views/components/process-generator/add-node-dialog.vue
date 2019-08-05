<template>
  <v-dialog
    v-model="dialog1"
    max-width="400"
  >
    <v-card>
      <v-layout row>
        <v-layout
          v-for="(item, index) in items"
          :key="index"
          column>
          <div><v-icon
            left
            large
            color="green darken-2"
            @click="click(item)">{{ item.icon }}</v-icon></div>
          <div>{{ item.text }}</div>
        </v-layout>
      </v-layout>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    node: {
      type: Object,
      default: undefined
    }
  },
  data: () => ({
    dialog1: false,
    items: [
      { icon: 'mdi-account', text: '审批人', type: 'approver' },
      { icon: 'mdi-arch', text: '抄送人', type: 'notifier' },
      { icon: 'mdi-air-conditioner', text: '条件分支', type: 'route' }
    ]
  }),
  watch: {
    'dialog' (val) {
      this.dialog1 = val
    },
    dialog1 (val) {
      this.$emit('update:dialog', val)
    }
  },
  methods: {
    click (item) {
      this.dialog1 = false
      switch (item.type) {
        case 'approver':
          this.addApprover(item)
          break
        case 'route':
          this.addRoute(item)
          break
        case 'notifier':
          this.addNotifier(item)
          break
        default:
          this.$Message.error('暂时不支持')
      }
    },
    addApprover (item) {
      // console.log(this.node)
      var node = {
        name: '审批人',
        prevId: this.node.nodeId,
        nodeId: '' + new Date().getTime(),
        type: 'approver'
      }
      this.$emit('addnode', node)
    },
    addNotifier (item) {
      var node = {
        name: '抄送人',
        prevId: this.node.nodeId,
        nodeId: '' + new Date().getTime(),
        type: 'notifier'
      }
      this.$emit('addnode', node)
    },
    addRoute (item) {
      var nodeId = new Date().getTime()
      var node = {
        type: 'route',
        prevId: this.node.nodeId,
        nodeId: '' + nodeId,
        conditionNodes: [
          { name: '条件1', type: 'condition', prevId: '' + nodeId, nodeId: '' + (nodeId + 10) },
          { name: '条件2', type: 'condition', prevId: '' + (nodeId + 10), nodeId: '' + (nodeId + 20) }
        ]
      }
      this.$emit('addnode', node)
    }
  }
}
</script>
