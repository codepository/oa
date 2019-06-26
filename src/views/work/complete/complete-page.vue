<template>
  <v-flex
    xs12
    sm12
    md12
    lg12
  >
    <!-- dialogs -->
    <Dialogs
      :show.sync="showDialogs"
      @ok="ok">
      <v-flex>
        <v-textarea
          v-model="comment"
          label="评论"
        />
      </v-flex>
    </Dialogs>
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
      <ProcessStepper
        id="stepper"
        :procid="proc.id"/>
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
            v-for="(item,index) in buttons"
            :key="index"
            flat
            color="teal"
            @click="click(item.text, item.type)">
            <span>{{ item.text }}</span>
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </v-bottom-nav>
      </v-card>
    </v-flex>
  </v-flex>
</template>
<script>
import ProcessStepper from './../comp/processStepper'
import ProcessContent from './../comp/processContent'
import Dialogs from '@/views/components/dialogs'
import { completeTask, withdrawTask } from '@/api/workflow'
export default {
  name: 'CompletePage',
  components: {
    ProcessStepper,
    ProcessContent,
    Dialogs
  },
  data: () => ({
    proc: '',
    showDialogs: false,
    comment: '同意',
    type: '',
    buttons: [
      {
        text: '撤消',
        icon: 'mdi-arrow-left-thick',
        type: 'withdraw'
      },
      {
        text: '拒绝',
        icon: 'mdi-backspace',
        type: 'reject'
      },
      {
        text: '同意',
        icon: 'mdi-check',
        type: 'approve'
      }
    ]
  }),
  mounted () {
    this.proc = this.$route.query.proc
  },
  methods: {
    click (text, type) {
      // console.log(text)
      this.comment = text
      this.type = type
      this.showDialogs = true
    },
    ok () {
      // console.log(this.comment)
      switch (this.type) {
        case 'approve':
          completeTask({
            pass: 'true',
            taskID: this.proc.taskID,
            comment: this.comment
          }).then(res => {
            this.$Message.info(res.data)
          })
          break
        case 'reject':
          completeTask({
            pass: 'false',
            taskID: this.proc.taskID,
            comment: this.comment
          }).then(res => {
            this.$Message.info(res.data)
          })
          break
        case 'withdraw':
          withdrawTask({
            taskID: this.proc.taskID,
            procInstID: this.proc.id,
            comment: this.comment
          }).then(res => {
            this.$Message.info(res.data)
          })
          break
        default:
          this.$Message.error('不存在的命令【' + this.type + '】')
      }
    }
  }
}
</script>
