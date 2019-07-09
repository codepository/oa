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
                    v-model="form.username"
                    :rules="required"
                    label="用户"
                    disabled><v-icon slot="prepend">mdi-account</v-icon></v-text-field>
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  md6
                  lg6
                >
                  <material-cascader
                    :value.sync="form.departmentid"
                    :label.sync="form.department"
                    :data="departments"/>
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
import { findDepartmentWithCompany, updateDepartment } from '@/api/node'
export default {
  name: 'UserDepartmentSet',
  data: () => ({
    company: '',
    departments: [],
    form: {
      department: '福州日报社',
      departmentid: '',
      username: '',
      company: ''
    },
    required: [
      v => !!v || '不能为空'
    ]
  }),
  mounted () {
    this.form.username = this.$route.query.user
    this.form.company = this.$store.state.user.company
    this.getDepartments()
  },
  methods: {
    handleSubmit () {
      // console.log(this.form)
      if (!this.form.department || !this.form.departmentid) {
        this.$Message.error('部门 department 和 departmentid 不能为空')
        return
      }
      updateDepartment(this.form).then(res => {
        this.$Message.info(res.data.message)
      })
    },
    getDepartments () {
      findDepartmentWithCompany(this.$store.state.user.company).then(res => {
        this.departments = res.data
      })
    }
  }
}
</script>
