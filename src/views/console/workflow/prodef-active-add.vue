<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
    scrollable>
    <v-layout
      justify-center
      wrap>
      <v-flex
        sm12
        xs12
        md12
        lg12>
        <Process
          ref="process"
          :node="node"
          @save="save"/>
      </v-flex>
    </v-layout>
    <AddProcdefDialog
      :dialog.sync="dialog"
      @on-success="handleSubmit"/>
  </v-container>
</template>
<script>
import Process from '@/views/components/process-generator/index.vue'
import AddProcdefDialog from './add-procdef-dialog'
import { saveProdef } from '@/api/workflow'
export default {
  components: {
    Process,
    AddProcdefDialog
  },
  data: () => ({
    node: null,
    dialog: false
  }),
  methods: {
    handleSubmit (name) {
      var data = {
        name: name,
        resource: this.node
      }
      saveProdef(data).then(res => {
        if (res.data.ok) {
          this.$Message.info('成功')
        } else {
          this.$Message.error(res.data.message)
        }
      })
    },
    save (node) {
      this.node = node
      this.dialog = true
    }
  }
}
</script>
