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
          title="添加成员"
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
                  <UserSelect
                    :value.sync="form.username"/>
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
import UserSelect from '@/views/user/comp/user-select'
import { saveRole } from '@/api/roletree'
export default {
  name: 'RoleAddUser',
  components: {
    UserSelect
  },
  data () {
    return {
      form: {
        username: '',
        company: this.$store.state.user.company,
        role: ''
      }
    }
  },
  mounted () {
    this.form.role = this.$route.query.role
  },
  methods: {
    handleSubmit () {
      // console.log(this.form)
      if (this.form.username) {
        saveRole(this.form).then(res => {
          this.$Message.info(res.data.message)
        })
      } else {
        this.$Message.error('用户名不能为空')
      }
    }
  }
}
</script>
