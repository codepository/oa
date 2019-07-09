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
          title="用户注册"
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
                  md4
                >
                  <v-text-field
                    v-model="form.username"
                    :rules="required"
                    label="用户真实姓名"/>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    v-model="form.phone"
                    :rules="phoneRules"
                    class="purple-input"
                    label="手机号"
                  />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    v-model="form.email"
                    :rules="emailRules"
                    label="邮箱地址"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-select
                    v-model="form.post"
                    :items="posts"
                    filled
                    label="职级"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <ComapanySelect
                    :value.sync="form.company"
                    label="公司或单位"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md12
                >
                  <DepartmentCascader
                    :company.sync="form.company"
                    :value.sync="form.departmentid"
                    :label.sync="form.department"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    v-model="form.password"
                    :rules="passRule"
                    type="password"
                    label="密码"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    v-model="repassword"
                    :rules="passRule"
                    type="password"
                    label="密码确认"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  text-xs-right
                >
                  <material-button
                    class="mx-0 font-weight-light"
                    color="success"
                    @click="handleSubmit"
                  >
                    注 册
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
import ComapanySelect from '@/views/user/comp/company-select'
import DepartmentCascader from '@/views/user/comp/department-cascader'
export default {
  name: 'RegistryForm',
  components: {
    ComapanySelect,
    DepartmentCascader
  },
  data: () => ({
    posts: ['普通员工', '中层副职', '中层正职', '高层副职', '高层正职'],
    required: [
      v => !!v || '不能为空'
    ],
    emailRules: [
      v => !!v || '邮箱不能为空',
      v => /.+@.+\..+/.test(v) || '无效的格式'
    ],
    phoneRules: [
      v => !!v || '电话不能为空',
      v => /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/.test(v) || '无效的格式'
    ],
    passRule: [
      v => !!v || '密码不能为空',
      v => /^(?!([A-Z]*|[a-z]*|[0-9]*|[!-/:-@[-`{-~]*|[A-Za-z]*|[A-Z0-9]*|[A-Z!-/:-@[-`{-~]*|[a-z0-9]*|[a-z!-/:-@[-`{-~]*|[0-9!-/:-@[-`{-~]*)$)[A-Za-z0-9!-/:-@[-`{-~]{8,20}$/.test(v) || '密码包含大写字母、小写字母、数字、特殊符号中的至少三类，且长度在8到20之间'
    ],
    repassword: '',
    form: {
      username: '',
      phone: '',
      post: '普通员工',
      email: '',
      company: '',
      department: '',
      departmentid: '',
      password: '',
      typename: '人员'
    }
  }),
  methods: {
    handleSubmit () {
      if (this.form.department.length === 0) {
        this.$Message.error('部门不能为空！')
        return
      }
      if (!this.checkPass()) {
        this.$Message.error('密码不一致！！')
        return
      }
      if (this.$refs.form.validate()) {
        this.$emit('on-success', this.form)
      }
    },
    checkPass () {
      if (this.form.password !== this.repassword) {
        // this.$Message.error('两次输入密码不一致！！')
        return false
      }
      return true
    }
  }
}
</script>
