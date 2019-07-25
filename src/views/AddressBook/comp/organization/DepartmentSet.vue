<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md8
      >
        <material-card
          color="green"
          title="部门修改"
          text="填写资料"
        >
          <v-form
            ref="form"
            :model="form"
            @keydown.enter.native="handleSubmit">
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                  xs12
                  sm6
                  md6
                  lg6
                >
                  <v-text-field
                    v-model="form.title"
                    :rules="required"
                    label="部门名称"><v-icon slot="prepend">mdi-home</v-icon></v-text-field>
                </v-flex>
                <v-flex
                  v-if="form.charger"
                  xs12
                  sm6
                  md6
                  lg6
                >
                  <v-text-field
                    v-model="form.charger"
                    :rules="required"
                    label="负责人"
                    disabled><v-icon slot="prepend">mdi-account</v-icon></v-text-field>
                </v-flex>
                <v-flex
                  v-if="!form.charger"
                  xs12
                  sm6
                  md6
                  lg6
                >
                  <v-autocomplete
                    v-if="form.type == '部门'"
                    v-model="form.charger"
                    :items="users"
                    label="负责人"
                  ><v-icon slot="prepend">mdi-account</v-icon></v-autocomplete>
                  <UserSelect
                    v-else
                    :value.sync="form.charger"
                    label="负责人"
                  ><v-icon slot="prepend">mdi-account</v-icon></UserSelect>
                </v-flex>
                <v-flex
                  v-if="form.admin"
                  xs12
                  sm6
                  md6
                  lg6
                >
                  <v-text-field
                    v-model="form.admin"
                    :rules="required"
                    label="管理人"
                    disabled><v-icon slot="prepend">mdi-settings</v-icon></v-text-field>
                </v-flex>
                <v-flex
                  v-if="!form.admin"
                  xs12
                  sm6
                  md6
                  lg6
                >
                  <UserSelect
                    :value.sync="form.admin"
                    label="管理人"
                  ><v-icon slot="prepend">mdi-settings</v-icon></UserSelect>
                </v-flex>
                <v-flex
                  xs12
                  text-xs-center
                >
                  <material-button
                    :block="true"
                    class="mx-0 font-weight-light"
                    color="success"
                    @click="handleSubmit"
                  >
                    确 定
                  </material-button>
                  <material-button
                    :block="true"
                    class="mx-0 font-weight-light"
                    color="default"
                    @click="deleteNode"
                  >
                    删 除 部 门
                  </material-button>
                  <material-button
                    :block="true"
                    class="mx-0 font-weight-light"
                    color="primary"
                    @click="changeCharger"
                  >
                    更改主管
                  </material-button>
                  <material-button
                    :block="true"
                    class="mx-0 font-weight-light"
                    color="primary"
                    @click="changeAdmin"
                  >
                    设置管理员
                  </material-button>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { findUsers, updateNode, deleteNode } from '@/api/node'
import UserSelect from '@/views/user/comp/user-select'
export default {
  name: 'DepartmentSet',
  components: {
    UserSelect
  },
  data: () => ({
    form: {
      id: '',
      title: '', // 部门名称
      charger: '', // 部门负责人
      admin: '', // 部门管理人员
      type: ''
    },
    users: [],
    required: [
      v => !!v || '不能为空'
    ]
  }),
  mounted () {
    this.form = this.$route.query.department
    if (!this.form.charger) {
      this.findUserWithParentid(this.form.parentid)
    }
  },
  methods: {
    handleSubmit () {
      if (this.$refs.form.validate()) {
        console.log(this.form)
        this.form.children = null
        updateNode(this.form).then(res => {
          if (res.data.ok) {
            this.$Message.info(res.data.message)
          } else {
            this.$Message.error(res.data.message)
          }
        })
      }
    },
    changeCharger () {
      this.findUserWithParentid(this.form.parentid)
      this.form.charger = undefined
    },
    changeAdmin () {
      this.form.admin = undefined
    },
    deleteNode () {
      this.form.type = '部门'
      deleteNode(this.form).then(res => {
        this.$Message.info(res.data.message)
      })
    },
    findUserWithParentid (id) {
      findUsers(id).then(res => {
        this.users = res.data
      })
    }
  }
}
</script>
