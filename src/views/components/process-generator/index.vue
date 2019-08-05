<template>
  <div id="processGenerator">
    <div
      v-for="(item, index) in items"
      :key="index">
      <material-node
        :node="item"
        @addnode="addnode"
        @delNode="delNode(item)"/>
    </div>
    <EndNode/>
    <material-button
      @click="save">保存</material-button>
  </div>
</template>
<script>
import EndNode from './end-node'
import { iteratorData, addNewNode, delNode } from '@/libs/process'
export default {
  components: {
    EndNode
  },
  props: {
    node: {
      type: Object,
      default: undefined
    }
  },
  data: () => ({
    items: [],
    node1: null
  }),
  watch: {
    'node': {
      handler (val) {
        this.node1 = val
      },
      deep: true
    }
  },
  mounted () {
    if (!this.node1) {
      this.initialNode()
    }
    this.iteratorData(this.node1)
  },
  methods: {
    initialNode () {
      this.node1 = {
        name: '发起人',
        type: 'start',
        nodeId: 'sid-startevent'
      }
    },
    iteratorData (data) {
      iteratorData(this.items, data)
    },
    addnode (node) {
      addNewNode(node, this.node1, this.items)
    },
    delNode (node) {
      delNode(node, this.node1, this.items)
    },
    save () {
      this.$emit('save', this.node1)
    }
  }
}
</script>
