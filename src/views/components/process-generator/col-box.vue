<template>
  <v-container
    fill-height
    style="margin:0;">
    <v-layout
      column
      align-content-center
      style="margin:0;">
      <div
        v-for="(item, index) in items"
        :key="index">
        <material-node
          :node="item"
          @addnode="addnode"
          @delNode="delNode(item)"
          @delConditionNode="delConditionNode"
          @addConditionFactor="addConditionFactor"/>
      </div>
    </v-layout>
  </v-container>
</template>
<script>
import { iteratorData, addNewNode, delNode } from '@/libs/process'
// import Node from './node'
export default {
  name: 'ColBox',
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
    node: {
      handler (val) {
        // console.log(val)
        if (val) {
          this.getData(val)
          this.node1 = val
        }
      },
      deep: true
    }
  },
  mounted () {
    if (this.node) {
      this.getData(this.node)
      this.node1 = this.node
    }
  },
  methods: {
    getData (data) {
      iteratorData(this.items, data)
    },
    addnode (node) {
      // console.log(this.node1)
      addNewNode(node, this.node1, this.items)
    },
    delNode (node) {
      delNode(node, this.node1, this.items)
    },
    delConditionNode () {
      this.$emit('delConditionNode')
    },
    addConditionFactor (node) {
      this.$emit('addConditionFactor', node)
    }
  }
}
</script>
