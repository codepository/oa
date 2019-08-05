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
      @click="delConditionNode">mdi-backspace</v-icon>
    <p style="color:green;margin:5px;">{{ node.name }}</p>
    <p
      style="margin:5px;"
      @click="setProperties">{{ text1 }}<span style="float:right;"><v-icon>mdi-arrow-right</v-icon></span></p>
    <AddNodeCondition
      :dialog.sync="dialog"
      :properties="properties"
      @on-success="setPropertiesOK"/>
  </v-card>
</template>
<script>
import AddNodeCondition from './add-node-condition'
export default {
  name: 'ConditionNodeBox',
  components: {
    AddNodeCondition
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
  data: () => ({
    // properties: {
    //   conditions: []
    // },
    properties: {
      conditions: [[]]
    },
    dialog: false
  }),
  computed: {
    text1 () {
      var text = '请设置条件'
      if (!this.node.properties) {
        return text
      }
      // console.log(this.node.properties)
      text = ''
      this.node.properties.conditions[0].forEach(cond => {
        text += cond.paramLabel + ','
      })
      return text.length > 8 ? text.substring(0, 8) : text
    }
  },
  methods: {
    delConditionNode () {
      this.$emit('delConditionNode')
    },
    setProperties () {
      this.dialog = true
    },
    setPropertiesOK (properties) {
      this.node.properties = properties
      this.$emit('addConditionFactor', this.node)
      // this.setText()
    }
  }
}
</script>
