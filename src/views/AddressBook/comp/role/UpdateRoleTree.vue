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
        title="修改角色"
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
                sm12
                md6
                lg4
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
              <v-flex
                xs12
                sm12
                md6
                lg4
                text-xs-center
              >
                <material-button
                  class="mx-0 font-weight-light"
                  color="default"
                  @click="handleDelete(form.id)"
                >
                  删 除
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
import { saveRoletree, deleteRoletreeById } from '@/api/roletree'
export default {
  name: 'UpdateRoleTree',
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
    this.form = this.$route.query.role
  },
  methods: {
    handleSubmit () {
      if (this.$refs.form.validate()) {
        saveRoletree(this.form).then(res => {
          if (res.data.ok) {
            this.$Message.info('成功')
          } else {
            this.$Message.error(res.data.message)
          }
        })
      }
    },
    handleDelete (id) {
      this.$Confirm.confirm('确定要删除' + this.form.title + '吗？').then(() => {
        deleteRoletreeById(id).then(res => {
          this.$Message.info(res.data.message)
        })
      }).catch(() => {
        // console.log('不删除')
      })
    }
  }
}
</script>
