<template>
  <v-layout
    justify-center
  >
    <v-dialog
      v-model="dialog1"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar
          dark
          color="primary">
          <v-btn
            icon
            dark
            @click="dialog1 = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>设置</v-toolbar-title>
          <v-spacer/>
          <v-toolbar-items>
            <v-btn
              text
              @click="add">添加</v-btn>
            <v-btn
              dark
              text
              @click="save">保存</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container v-if="properties">
          <v-layout
            v-for="(item, index) in properties.conditions[0]"
            :key="index"
            wrap>
            <v-flex
              xs12
              sm12
              md12
              lg12>
              <p
                style="color:green;font-size:20px;"
                @click="delConditionFactor(item)">条件{{ index + 1 }}<span><v-icon>mdi-delete</v-icon></span></p>
              <v-divider style="border-top: 2px solid green"/>
            </v-flex>
            <v-flex
              xs12
              sm6
              md6
              lg4>
              <p>paramKey: <v-text-field
                v-model="item.paramKey"
                label="参数key值"><v-icon slot="prepend">mdi-apple-finder</v-icon></v-text-field></p>
            </v-flex>
            <v-flex
              xs12
              sm6
              md6
              lg4>
              <p>paramLabel: <v-text-field
                v-model="item.paramLabel"
                label="参数label值"><v-icon slot="prepend">mdi-apple-finder</v-icon></v-text-field></p>
            </v-flex>
            <v-flex
              v-if="item.type === 'dingtalk_actioner_value_condition'"
              xs12
              sm12
              md12
              lg12>
              <p>
                paramValues: <AddConditionParamvalues
                  :value.sync="item.paramValues"
                ><v-icon slot="prepend">mdi-apple-finder</v-icon></AddConditionParamvalues>
              </p>
            </v-flex>
            <v-flex
              v-if="item.type === 'dingtalk_actioner_range_condition'"
              xs12
              sm6
              md6
              lg4>
              <p>lowerBound: <v-text-field
                v-model="item.lowerBound"
                label="参数 >="><v-icon slot="prepend">mdi-apple-finder</v-icon></v-text-field></p>
            </v-flex>
            <v-flex
              v-if="item.type === 'dingtalk_actioner_range_condition'"
              xs12
              sm6
              md6
              lg4>
              <p>upperBound: <v-text-field
                v-model="item.upperBound"
                label="参数 <="><v-icon slot="prepend">mdi-apple-finder</v-icon></v-text-field></p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
    <AddNodeConditionType
      :dialog.sync="dialog2"
      @addCondition="addCondition"/>
  </v-layout>
</template>
<script>
import AddNodeConditionType from './add-node-condition-type'
import AddConditionParamvalues from './add-condition-paramvalues'
export default {
  components: {
    AddNodeConditionType,
    AddConditionParamvalues
  },
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    properties: {
      type: Object,
      default: undefined
    }
  },
  data: () => ({
    dialog1: false,
    dialog2: false
  }),
  watch: {
    'dialog' (val) {
      this.dialog1 = val
    },
    dialog1 (val) {
      this.$emit('update:dialog', val)
    }
  },
  mounted () {
    // console.log(this.properties)
  },
  methods: {
    ifValid (cond) {
      if (!cond.paramKey || !cond.paramLabel) {
        this.$Message.error('的paramKey和paramLabel 值不能为空')
        return false
      }
      if (cond.type === 'dingtalk_actioner_value_condition' && cond.paramValues.length <= 0) {
        this.$Message.error('paramValues 值不能为空')
        return false
      }
      if (cond.type === 'dingtalk_actioner_range_condition') {
        if (cond.lowerBound === '' && cond.upperBound === '') {
          this.$Message.error('【lowerBound】和【lowerBound】不能同时为空')
          return false
        }
      }
      return true
    },
    save () {
      if (this.properties.conditions[0].length === 0) {
        this.$Message.error('条件不能为空')
        return
      }
      var flag = this.properties.conditions[0].every(cond => {
        return this.ifValid(cond)
      })
      // console.log(flag)
      if (flag) {
        this.dialog1 = false
        this.$emit('on-success', this.properties)
      }
    },
    add () {
      this.dialog2 = true
    },
    delConditionFactor (condition) {
      var index = null
      this.properties.conditions[0].some((cond, i) => {
        if (cond.paramKey === condition.paramKey) {
          index = i
          return true
        }
      })
      if (index !== null) {
        this.properties.conditions[0].splice(index, 1)
        this.$emit('on-success', this.properties)
      }
    },
    addCondition (type) {
      var condition = {
        type: type,
        paramKey: '',
        paramLabel: ''
      }
      switch (type) {
        case 'dingtalk_actioner_value_condition':
          condition.paramValues = []
          break
        case 'dingtalk_actioner_range_condition':
          condition.lowerBound = ''
          condition.upperBound = ''
          break
        default:
          this.$Message.error('【 ' + type + ' 不存在 】')
          break
      }
      this.properties.conditions[0].push(condition)
    }
  }
}
</script>
