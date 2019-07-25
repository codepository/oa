<template>
  <v-container
    fill-height
    fluid
    style="margin:0;padding:12px;background:orange;"
  >
    <v-layout
      justify-center
      column
    >
      <NodeWrapBox
        :type="type"
        :text="text"/>
      <AddNodeBtnBox/>
    </v-layout>
  </v-container>
</template>
<script>
import NodeWrapBox from './node-wrap-box'
import AddNodeBtnBox from './add-node-btn-box'
export default {
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
    }
  }
}
</script>
