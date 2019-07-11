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
        sm12
        md6
        lg6>
        <material-card
          color="green"
          title="添加流程"
          text="prodef">
          <v-form
            ref="form"
            @keydown.enter.native="handleSubmit">
            <v-flex>
              <v-text-field
                v-model="form.name"
                :rules="required"
                label="流程名"/>
            </v-flex>
            <v-flex>
              <v-textarea
                v-model="resource"
                :rules="required"
                solo
                name="input-7-4"
                label="流程配置JSON字符串"
              />
            </v-flex>
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
export default {
  name: 'ProdefForm',
  data: () => ({
    required: [
      v => !!v || '不能为空'
    ],
    resource: '',
    form: {
      name: '',
      resource: ''
    }
  }),
  methods: {
    handleSubmit () {
      this.form.resource = JSON.parse(this.resource)
      if (this.$refs.form.validate()) {
        this.$emit('on-success', this.form)
      }
    }
  }
}
</script>
