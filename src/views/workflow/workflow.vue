<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      wrap>
      <!-- 我的任务-->
      <Mytask/>
      <v-spacer/>
      <!-- 流程申请 -->
      <Process/>
    </v-layout>
  </v-container>
</template>
<script>
import Mytask from '@/views/workflow/comp/mytask'
import Process from '@/views/workflow/comp/process'
export default {
  name: 'Workflow',
  components: {
    Mytask,
    Process
  },
  data: () => ({
    //
  })
}
</script>
