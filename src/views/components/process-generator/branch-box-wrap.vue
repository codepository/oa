<template>
  <v-container
    fill-height
    fluid
  >
    <v-layout
      column>
      <BranchBox
        @addCondition="addCondition"
        @delNode="delNode">
        <ColBox
          v-for="(item,index) in node.conditionNodes"
          :key="index"
          :node="item"
          @delConditionNode="delConditionNode(item)"
          @addConditionFactor="addConditionFactor"/>
      </BranchBox>
      <AddNodeBtnBox
        :node="node"
        @addnode="addnode"/>
    </v-layout>
  </v-container>
</template>
<script>
import BranchBox from './branch-box'
import ColBox from './col-box'
import AddNodeBtnBox from './add-node-btn-box'
import { delConditionNode, setConditionFactor } from '@/libs/process'
export default {
  name: 'BranchBoxWrap',
  components: {
    AddNodeBtnBox,
    BranchBox,
    ColBox
  },
  props: {
    node: {
      type: Object,
      default: undefined
    }
  },
  data: () => ({
    //
  }),
  mounted () {
    //
  },
  methods: {
    addCondition () {
      var lastNode = this.node.conditionNodes[this.node.conditionNodes.length - 1]
      var name = '条件' + this.getName(lastNode.name)
      var node = {
        name: name,
        type: 'condition',
        prevId: lastNode.prevId,
        nodeId: '' + new Date().getTime()
      }
      this.node.conditionNodes.push(node)
    },
    getName (name) {
      var num = parseInt(name.substring(2))
      return num + 1
    },
    addnode (node) {
      this.$emit('addnode', node)
    },
    delConditionNode (item) {
      delConditionNode(item, this.node)
      if (this.node.conditionNodes.length < 2) {
        this.$emit('delNode')
      }
    },
    delNode () {
      this.$emit('delNode')
    },
    addConditionFactor (conditionNode) {
      setConditionFactor(conditionNode, this.node)
    }
  }
}
</script>
