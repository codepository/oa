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
                    label="用户名"><v-icon slot="prepend">mdi-home</v-icon></v-text-field>
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
export default {
  name: 'AddUser',
  methods: {
    handleSubmit (params) {

    }
  }
}
</script>
