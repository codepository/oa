<template>
  <v-layout
    row
    justify-center>
    <v-flex
      xs12
      md12
    >
      <material-card
        color="green"
        title="添加角色"
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
                  label="角色名称"><v-icon slot="prepend">mdi-face</v-icon></v-text-field>
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
</template>
<script>
import { saveRoletree } from '@/api/roletree'
export default {
  name: 'AddRoleTree',
  data: () => ({
    form: {
      id: '',
      title: '',
      parentid: ''
    },
    parent: {},
    required: [
      v => !!v || '不能为空'
    ]
  }),
  mounted () {
    this.parent = this.$route.query.role
    this.form = {
      parentid: this.parent.id,
      company: this.$store.state.user.company,
      depth: (this.parent.depth + 1),
      type: '角色'
    }
  },
  methods: {
    handleSubmit () {
      if (!this.parent.id) {
        this.$Message.error('父节点为空！！')
        return
      }
      if (this.$refs.form.validate()) {
        saveRoletree(this.form).then(res => {
          if (res.data.ok) {
            this.$Message.info('成功')
          } else {
            this.$Message.error(res.data.message)
          }
        })
      }
    }
  }
}
</script>
