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
export default {
  name: 'AddUser',
  data: () => ({

  }),
  methods: {
    handleSubmit (params) {
      this.$Message.info('提交')
    }
  }
}
</script>
