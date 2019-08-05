<template>
  <v-card
    width="150"
    height="80"
    class="mx-auto"
  >
    <v-icon
      color="purple"
      dark
      style="float:right;"
      @click="delNode">mdi-backspace</v-icon>
    <p
      style="background-color: coral;"><v-icon>mdi-account</v-icon>{{ node.nodeId }}</p>
    <p>{{ text }}<span style="float:right;"><v-icon @click="addApprover">mdi-arrow-right</v-icon></span></p>
    <AddNodeApprover
      :dialog.sync="dialog"
      @setProperties="setProperties"/>
  </v-card>
</template>
<script>
import AddNodeApprover from './add-node-approver'
export default {
  name: 'NodeWrapBox',
  components: {
    AddNodeApprover
  },
  props: {
    type: {
      type: String,
      default: '审批人'
    },
    node: {
      type: Object,
      default: undefined
    }
  },
  data: () => ({
    dialog: false,
    text: '请选择'
  }),
  mounted () {
    this.setText()
  },
  methods: {
    delNode () {
      this.$emit('delNode')
    },
    addApprover () {
      this.dialog = true
    },
    setProperties (properties) {
      this.node.properties = properties
      this.setText()
    },
    setText () {
      if (this.node.type === 'start') {
        this.text = '所有人'
      }
      // console.log(this.node.properties)
      if (this.node.properties) {
        // console.log(this.node.properties.actionerRules[0].type)
        if (this.node.properties.actionerRules[0].type === 'target_management') {
          this.text = '上级'
        } else {
          this.text = this.node.properties.actionerRules[0].labelNames
        }
        var actType = this.node.properties.actionerRules[0].actType === 'and' ? '与签' : '或签'
        this.text += '-' + actType
      }
    }
  }
}
</script>
