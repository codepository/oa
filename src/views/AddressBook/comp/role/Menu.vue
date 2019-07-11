<template>
  <FloatMenu>
    <v-flex
      v-for="(item, index) in routes"
      :key="index"
      xs12>
      <div
        class="text-xs-center body-2 text-uppercase sidebar-filter"
        @click="set(item.route)">{{ item.text }}</div>
      <v-divider class="mt-3"/>
    </v-flex>
  </FloatMenu>
</template>
<script>
import FloatMenu from '@/views/components/FloatMenu'
export default {
  components: {
    FloatMenu
  },
  props: {
    role: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    role1: {},
    routes: [
      { text: '添加成员', route: '角色添加成员' },
      { text: '添加子角色', route: '添加角色' },
      { text: '管理角色', route: '修改角色' }
    ]
  }),
  watch: {
    'role' (val) {
      this.role1 = val
      // console.log(this.role1)
    }
  },
  methods: {
    set (route) {
      // console.log(this.department)
      this.$router.push({
        name: route,
        query: {
          role: this.role1
        }
      })
    }
  }
}
</script>
