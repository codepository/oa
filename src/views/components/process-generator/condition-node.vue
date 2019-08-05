<template>
  <v-container
    fluid
    style="height:140px;margin:0;padding:12px;"
  >
    <v-layout
      justify-center
      column
    >
      <ConditionNodeBox
        :node="node"
        @delConditionNode="delConditionNode"
        @addConditionFactor="addConditionFactor"/>
      <AddNodeBtnBox
        :node="node"
        @addnode="addnode"/>
    </v-layout>
  </v-container>
</template>
<script>
import ConditionNodeBox from './condition-node-box'
import AddNodeBtnBox from './add-node-btn-box'
export default {
  name: 'ConditionNode',
  components: {
    ConditionNodeBox,
    AddNodeBtnBox
  },
  props: {
    value: {
      type: Number,
      default: 1
    },
    text: {
      type: String,
      default: '请设置条件'
    },
    node: {
      type: Object,
      default: undefined
    }
  },
  methods: {
    addnode (node) {
      this.$emit('addnode', node)
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
