<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-flex>
      <v-card>
        <v-tabs
          v-model="tabs"
          fixed-tabs
        >
          <v-tabs-slider/>
          <v-tab
            href="#mobile-tabs-5-1"
            class="primary--text"
          >
            <v-icon
              large
              color="green">mdi-alert-box</v-icon>已结束
          </v-tab>

          <v-tab
            href="#mobile-tabs-5-2"
            class="primary--text"
          >
            <v-icon
              large
              color="error">mdi-alarm-check</v-icon>审批中
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tabs">
          <v-tab-item
            :value="'mobile-tabs-5-1'"
          >
            <v-card flat>
              <NotifierTable status="history"/>
            </v-card>
          </v-tab-item>
          <v-tab-item
            :value="'mobile-tabs-5-2'"
          >
            <v-card flat>
              <NotifierTable/>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-flex>
  </v-container>
</template>
<script>
import NotifierTable from './notifier-table'
export default {
  name: 'WorkflowNotifier',
  components: {
    NotifierTable
  },
  data: () => ({
    tabs: null
  })
}
</script>
