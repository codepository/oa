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
                    label="部门负责人"
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
                    v-model="form.charger"
                    :items="users"
                    label="部门负责人"
                  ><v-icon slot="prepend">mdi-account</v-icon></v-autocomplete>
                </v-flex>
                <v-flex
                  xs12
                  text-xs-center
                >
                  <material-button
                    class="mx-0 font-weight-light"
                    color="success"
                    block="true"
                    @click="handleSubmit"
                  >
                    确 定
                  </material-button>
                  <material-button
                    class="mx-0 font-weight-light"
                    color="default"
                  >
                    删 除 部 门
                  </material-button>
                  <material-button
                    class="mx-0 font-weight-light"
                    color="primary"
                    @click="changeCharger"
                  >
                    更改主管
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
import { findUsers, updateNode } from '@/api/node'
export default {
  name: 'DepartmentSet',
  data: () => ({
    form: {
      id: '',
      title: '', // 部门名称
      charger: '', // 部门负责人
      type: ''
    },
    users: [],
    required: [
      v => !!v || '不能为空'
    ]
  }),
  mounted () {
    // console.log(this.$route.query.department)
    this.form = this.$route.query.department
  },
  methods: {
    handleSubmit () {
      if (this.$refs.form.validate()) {
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
      this.form.charger = undefined
      this.findUserWithParentid(this.form.id)
    },
    findUserWithParentid (id) {
      var param = {
        company: this.$store.state.user.company,
        parentid: id
      }
      findUsers(param).then(res => {
        this.users = res.data
      })
    }
  }
}
</script>
