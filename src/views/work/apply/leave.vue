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
          title="请假"
          text="填写信息"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                  xs12
                  sm12
                  md12
                  lg12
                >
                  <LeaveTypeSelect
                    :value.sync="form.type"/>
                </v-flex>
                <v-flex
                  xs12
                  sm12
                  md12
                  lg12
                >
                  <material-date-times
                    :datetimes.sync="form.start"
                    label="开始时间"/>
                </v-flex>
                <v-flex
                  xs12
                  sm12
                  md12
                  lg12
                >
                  <material-date-times
                    :datetimes.sync="form.end"
                    label="结束时间"/>
                </v-flex>
                <v-flex
                  xs12
                  md12>
                  <v-text-field
                    v-model="day"
                    class="purple-input"
                    label="请假天数"
                    type="number"
                    readonly/>
                </v-flex>
                <v-flex
                  xs12
                  sm12
                  md12
                  lg12>
                  <v-textarea
                    v-model="form.reason"
                    class="purple-input"
                    label="请假事由"
                    value=""
                  />
                </v-flex>
                <v-flex
                  xs12
                  text-xs-right
                >
                  <material-button
                    color="success"
                    @click="handleSubmit"
                  >
                    确定
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
import LeaveTypeSelect from './../comp/leave-type-select'
export default {
  name: 'Leave',
  components: {
    LeaveTypeSelect
  },
  data: () => ({
    form: {
      type: '',
      start: null,
      end: null,
      day: '',
      reason: ''
    }
  }),
  computed: {
    day: function () {
      if (!this.form.start || !this.form.end) {
        return 0
      }
      var start = Date.parse(new Date(this.form.start.substr(0, 10)))
      var end = Date.parse(new Date(this.form.end.substr(0, 10)))
      return (end - start) / (1000 * 3600 * 24) + 1
    }
  },
  methods: {
    handleSubmit () {
      this.form.day = this.day
      if (this.validate()) {
        console.log(this.form)
      }
    },
    validate () {
      var start = Date.parse(new Date(this.form.start))
      var end = Date.parse(new Date(this.form.end))
      if (end < start) {
        this.$Message.error('结束时间不能小于开始日期')
        return
      }
      if (!this.form.type) {
        this.$Message.error('请假类型不能为空')
        return false
      }
      if (!this.form.start) {
        this.$Message.error('开始日期不能为空')
        return false
      }
      if (!this.form.end) {
        this.$Message.error('结束日期不能为空')
        return false
      }
      if (!this.form.reason) {
        this.$Message.error('请假事由不能为空')
        return false
      }
      return true
    }
  }
}
</script>
