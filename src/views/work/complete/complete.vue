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
              color="error">mdi-gavel</v-icon>待我审批的
          </v-tab>

          <v-tab
            href="#mobile-tabs-5-2"
            class="primary--text"
          >
            <v-icon
              large
              color="green">mdi-gavel</v-icon>我已审批的
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tabs">
          <v-tab-item
            :value="'mobile-tabs-5-1'"
          >
            <v-card flat>
              <UncompleteTable/>
            </v-card>
          </v-tab-item>
          <v-tab-item
            :value="'mobile-tabs-5-2'"
          >
            <v-card flat>
              <CompleteTable/>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-flex>
  </v-container>
</template>
<script>
import UncompleteTable from './uncomplete-table'
import CompleteTable from './complete-table'
export default {
  name: 'WorkflowComplete',
  components: {
    UncompleteTable,
    CompleteTable
  },
  data () {
    return {
      tabs: null
    }
  },
  methods: {
  }
}
</script>
