<template>
  <FloatMenu>
    <v-flex
      v-for="(item, index) in routes"
      :key="index"
      xs12>
      <div
        class="text-xs-center body-2 text-uppercase sidebar-filter"
        @click="set(item)">{{ item }}</div>
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
    department: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    OAMANAGER: 'OA管理员',
    routes: [
      '添加员工',
      '添加子部门',
      '部门设置',
      '导入员工'
    ]
  }),
  methods: {
    set (route) {
      if (!this.permission()) {
        this.$Message.error('只有【部门负责人】和【' + this.OAMANAGER + '】才有此权限')
        return
      }
      // console.log(this.department)
      this.$router.push({
        name: route,
        query: {
          department: this.department
        }
      })
    },
    permission () {
      if (!this.department) {
        return false
      }
      if (this.department.charger && this.department.charger === this.$store.state.user.userName) {
        return true
      }
      if (this.$store.state.user.roles.length > 0) {
        return this.$store.state.user.roles.some(role => {
          return role === this.OAMANAGER
        })
      }
      return false
    }
  }
}
</script>
