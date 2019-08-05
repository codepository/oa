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
              dark
              text
              @click="save">保存</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <p>审批人</p>
          <v-divider/>
          <v-layout>
            <v-radio-group
              v-model="approver"
              row>
              <v-radio
                v-for="(item, index) in approvers"
                :key="index"
                :label="item.label"
                :value="item.value"
                :color="item.color"/>
            </v-radio-group>
          </v-layout>
          <material-button
            v-if="approver === 'target_label'"
            @click="dialog2 = true">选择角色</material-button>
          <AddRoleDialog
            :dialog.sync="dialog2"
            :role.sync="properties.actionerRules[0].labelNames"/>
          <ShowUserInRole
            :role="properties.actionerRules[0].labelNames"
            :count.sync="properties.actionerRules[0].memberCount"/>
          <div v-if="approver!== 'target_management'">
            <p>审批方式</p>
            <v-divider/>
            <v-layout align-center>
              <v-radio-group
                v-model="actType"
                row>
                <v-radio
                  v-for="(item) in actTypes"
                  :key="item.label"
                  :label="item.label"
                  :value="item.value"
                  :color="item.color"/>
              </v-radio-group>
              <div v-if="properties.actionerRules[0].actType === 'and'">
                <v-text-field
                  v-model="properties.actionerRules[0].memberCount"
                  label="会签需通过人数"><v-icon slot="prepend">mdi-apple-finder</v-icon></v-text-field>
              </div>
            </v-layout>
          </div>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import AddRoleDialog from './add-role-dialog'
import ShowUserInRole from './show-user-in-role'
export default {
  components: {
    AddRoleDialog,
    ShowUserInRole
  },
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dialog1: false,
    dialog2: false,
    approver: 'target_management',
    actType: 'or',
    approvers: [
      { label: '上级', value: 'target_management', color: 'red' },
      { label: '角色', value: 'target_label', color: 'green' }
    ],
    actTypes: [
      { label: '或签', value: 'or', color: 'red' },
      { label: '与签', value: 'and', color: 'green' }
    ],
    properties: {
      actionerRules: [
        {
          type: 'target_management', // 审批人类型
          labelNames: '',
          memberCount: 1, // 审批人数
          actType: 'or' // 会签类型
        }
      ]
    }
  }),
  watch: {
    'dialog' (val) {
      this.dialog1 = val
    },
    dialog1 (val) {
      this.$emit('update:dialog', val)
    },
    approver (val) {
      this.properties.actionerRules[0].type = val
    },
    actType (val) {
      this.properties.actionerRules[0].actType = val
    }
  },
  methods: {
    save () {
      this.dialog1 = false
      // console.log(this.properties)
      this.$emit('setProperties', this.properties)
    }
  }
}
</script>
