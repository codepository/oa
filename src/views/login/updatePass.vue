<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap>
      <v-flex
        xs12
        sm6
        md6
        lg3>
        <material-card
          color="green"
          title="修改密码"
          text="修改密码">
          <v-form
            ref="form"
            :model="form"
            @keydown.enter.native="handleSubmit">
            <v-container py-0>
              <v-layout wrap>
                <v-flex>
                  <v-text-field
                    v-model="form.oldPass"
                    :rules="required"
                    type="password"
                    label="旧密码"
                    class="purple-input"/>
                </v-flex>
                <v-flex>
                  <v-text-field
                    v-model="form.password"
                    :rules="passRule"
                    type="password"
                    label="新密码"
                    class="purple-input"/>
                </v-flex>
                <v-flex>
                  <v-text-field
                    v-model="repassword"
                    :rules="required"
                    type="password"
                    label="新密码确认"
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
                  >修改密码</material-button>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <!-- <v-flex></v-flex> -->
    </v-layout>
  </v-container>
</template>
<script>
import { updatePass } from '@/api/user'
export default {
  name: 'UpdatePass',
  data: () => ({
    passRule: [
      v => !!v || '密码不能为空',
      v => /^(?!([A-Z]*|[a-z]*|[0-9]*|[!-/:-@[-`{-~]*|[A-Za-z]*|[A-Z0-9]*|[A-Z!-/:-@[-`{-~]*|[a-z0-9]*|[a-z!-/:-@[-`{-~]*|[0-9!-/:-@[-`{-~]*)$)[A-Za-z0-9!-/:-@[-`{-~]{8,20}$/.test(v) || '密码包含大写字母、小写字母、数字、特殊符号中的至少三类，且长度在8到20之间'
    ],
    required: [
      v => !!v || '不能为空'
    ],
    repassword: '',
    form: {
      password: '',
      oldPass: ''
    }
  }),
  methods: {
    handleSubmit () {
      if (!this.checkPass()) {
        this.$Message.error('密码不一致！！')
        return
      }
      if (this.$refs.form.validate()) {
        this.form.name = this.$store.state.user.phone
        updatePass(this.form).then(res => {
          alert(res.data.message)
        })
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
