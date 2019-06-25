<template>
  <v-flex
    xs12
    sm12
    md12
    lg12
  >
    <!-- 流程内容 -->
    <v-flex
      xs12
      sm12
      md12
      lg12>
      <ProcessContent
        :proc="proc"/>
    </v-flex>
    <!-- 流程进度-->
    <v-flex
      xs12
      sm12
      md12
      lg12>
      <ProcessStepper :procid="proc.id"/>
    </v-flex>
    <!-- 流程控制-->
    <v-flex
      xs12
      sm12
      md12
      lg12>
      <v-card
        height="50px"
        flat>
        <v-bottom-nav
          :value="true"
          color="green">
          <v-btn
            flat
            color="teal"
            @click="withdraw">
            <span>撤销</span>
            <v-icon larg>mdi-arrow-left-thick</v-icon>
          </v-btn>
          <v-btn
            flat
            color="teal"
            @click="reject">
            <span>拒绝</span>
            <v-icon>mdi-backspace</v-icon>
          </v-btn>
          <v-btn
            flat
            color="teal"
            @click="agree">
            <span>同意</span>
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </v-bottom-nav>
      </v-card>
    </v-flex>
  </v-flex>
</template>
<script>
import ProcessStepper from './../comp/processStepper'
import ProcessContent from './../comp/processContent'
export default {
  name: 'CompletePage',
  components: {
    ProcessStepper,
    ProcessContent
  },
  data: () => ({
    proc: ''
  }),
  mounted () {
    this.proc = this.$route.query.proc
  },
  methods: {
    withdraw () {
      this.$Confirm.confirm('撤回').then(() => {
        console.log('ok')
      }).catch(() => {
        console.log('no')
      })
    },
    reject () {
      this.$Confirm.confirm('驳回').then(() => {
        console.log('ok')
      }).catch(() => {
        console.log('no')
      })
    },
    agree () {
      this.$Confirm.confirm('通过').then(() => {
        console.log('ok')
      }).catch(() => {
        console.log('no')
      })
    }
  }
}
</script>
