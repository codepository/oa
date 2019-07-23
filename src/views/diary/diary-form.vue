<template>
  <material-card
    color="green"
    title="更新项目"
    text="更新项目"
  >
    <v-form
      ref="form"
      @keydown.enter.native="handleSubmit">
      <v-flex>
        <material-date
          :date.sync="form.startDate"
          label="开始时间"/>
      </v-flex>
      <v-flex>
        <material-date
          :date.sync="form.endDate"
          label="结束时间"/>
      </v-flex>
      <v-flex>
        <v-textarea
          v-model="form.projectContent"
          :rules="required"
          solo
          name="input-7-4"
          label="项目内容"
        />
      </v-flex>
      <v-flex>
        <v-textarea
          v-model="form.progress"
          :rules="required"
          solo
          name="input-7-4"
          label="项目进度"
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
</template>
<script>
export default {
  data: () => ({
    required: [
      v => !!v || '不能为空'
    ],
    form: {
      projectContent: '',
      progress: '',
      startDate: '',
      endDate: ''
    }
  }),
  mounted () {
    console.log(this.$route.query.item)
    this.form = this.$route.query.item
  },
  methods: {
    handleSubmit () {
      if (this.$refs.form.validate()) {
        this.$emit('on-success', this.form)
      }
    }
  }
}
</script>
