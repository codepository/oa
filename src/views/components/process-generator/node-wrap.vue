<template>
  <v-container
    fill-height
    fluid
    style="margin:0;padding:12px;"
  >
    <v-layout
      justify-center
      column
    >
      <NodeWrapBox
        :node="node"
        @delNode="delNode"/>
      <AddNodeBtnBox
        :node="node"
        @addnode="addnode"/>
    </v-layout>
  </v-container>
</template>
<script>
import NodeWrapBox from './node-wrap-box'
import AddNodeBtnBox from './add-node-btn-box'
export default {
  name: 'NodeWrap',
  components: {
    NodeWrapBox,
    AddNodeBtnBox
  },
  props: {
    type: {
      type: String,
      default: undefined
    },
    text: {
      type: String,
      default: undefined
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
    delNode () {
      this.$emit('delNode')
    }
  }
}
</script>
