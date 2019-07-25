<template>
  <v-container
    fluid
    style="height:140px;background:red;margin:0;padding:12px;"
  >
    <v-layout
      justify-center
      column
    >
      <ConditionNodeBox
        :value="value"
        :text="text"/>
      <AddNodeBtnBox/>
    </v-layout>
  </v-container>
</template>
<script>
import ConditionNodeBox from './condition-node-box'
import AddNodeBtnBox from './add-node-btn-box'
export default {
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
    }
  }
}
</script>
