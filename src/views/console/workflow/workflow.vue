<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <ProdefTable/>
      </v-flex>
    </v-layout>
    <FloatMenu>
      <v-flex
        v-for="(item, index) in routes"
        :key="index"
        xs12>
        <div
          class="text-xs-center body-2 text-uppercase sidebar-filter"
          @click="set(item)">{{ item.text }}</div>
        <v-divider class="mt-3"/>
      </v-flex>
    </FloatMenu>
  </v-container>
</template>

<script>
import ProdefTable from './procdef-table'
import FloatMenu from '@/views/components/FloatMenu'
export default {
  components: {
    ProdefTable,
    FloatMenu
  },
  data: () => ({
    routes: [
      { text: '通过JSON添加流程', route: '新增流程' },
      { text: '动态添加流程', route: '动态新增流程' }
    ]
  }),
  methods: {
    set (item) {
      this.$router.push({
        name: item.route
      })
    }
  }
}
</script>
