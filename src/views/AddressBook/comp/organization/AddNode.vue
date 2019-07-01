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
          title="添加子部门"
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
                  xs12
                  sm6
                  md6
                  lg6
                >
                  <v-text-field
                    v-model="form.charger"
                    :rules="required"
                    label="部门负责人"><v-icon slot="prepend">mdi-account</v-icon></v-text-field>
                </v-flex>
                <v-flex
                  xs12
                  text-xs-center
                >
                  <material-button
                    class="mx-0 font-weight-light"
                    color="success"
                    block
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
import { saveNewNodeReturn } from '@/api/node'
export default {
  name: 'AddNode1',
  data: () => ({
    form: {
      title: '',
      parentid: '',
      type: '部门',
      depth: '',
      company: '',
      charger: ''
    },
    required: [
      v => !!v || '不能为空'
    ]
  }),
  mounted () {
    this.form.parentid = this.$route.query.department.id
    this.form.depth = this.$route.query.department.depth + 1
    this.form.company = this.$route.query.department.company
    this.form.charger = this.$store.state.user.userName
    // console.log(this.form)
  },
  methods: {
    handleSubmit () {
      if (this.$refs.form.validate()) {
        this.form.title.trim()
        saveNewNodeReturn(this.form).then(res => {
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
