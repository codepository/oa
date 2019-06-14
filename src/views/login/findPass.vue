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
          title="找回密码"
          text="找回密码">
          <v-form
            ref="form"
            @keydown.enter.native="handleSubmit">
            <v-text-field
              v-model="form.email"
              :rules="emailRules"
              label="邮箱地址"
              class="purple-input"/>
            <v-flex>
              <v-layout justify-center>
                <material-button
                  color="success"
                  @click="handleSubmit"
                >提 交</material-button>
              </v-layout>
            </v-flex>
          </v-form>
        </material-card>
      </v-flex>
      <!-- <v-flex></v-flex> -->
    </v-layout>
  </v-container>
</template>
<script>
import { findPass } from '@/api/user'
export default {
  name: 'FindPass',
  data: () => ({
    emailRules: [
      v => !!v || '邮箱不能为空',
      v => /.+@.+\..+/.test(v) || '无效的格式'
    ],
    form: {
      email: ''
    }
  }),
  methods: {
    handleSubmit () {
      if (this.$refs.form.validate()) {
        findPass(this.form).then(res => {
          if (res.data.ok) {
            alert(res.data.message)
            this.$router.push({
              name: 'login'
            })
          } else {
            alert(res.data.message)
          }
        })
      }
    }
  }
}
</script>
