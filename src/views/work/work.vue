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
import Mytask from '@/views/work/comp/mytask'
import Process from '@/views/work/comp/process'
export default {
  name: 'Work',
  components: {
    Mytask,
    Process
  },
  data: () => ({
    //
  })
}
</script>
