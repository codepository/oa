<template>
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
</template>
<script>
import FloatMenu from '@/views/components/FloatMenu'
export default {
  components: {
    FloatMenu
  },
  props: {
    // 当前选中部门的详细信息
    department: {
      type: Object,
      default: null
    },
    // 当前部门路径:[福州日报社,日报,日报运营中心]
    departments: {
      type: Array,
      default: null
    },
    // 组织架构完整信息
    data: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    OAMANAGER: 'OA管理员',
    routes: [
      { text: '添加员工', route: '添加员工' },
      { text: '添加子部门', route: '添加子部门' },
      { text: '部门设置', route: '部门设置' }
      // { text: '导入员工' },
    ]
  }),
  methods: {
    set (item) {
      if (!this.permission()) {
        this.$Message.error('只有【部门管理人】和【' + this.OAMANAGER + '】才有此权限')
        return
      }
      // console.log(this.department)
      this.$router.push({
        name: item.route,
        query: {
          department: this.department
        }
      })
    },
    permission () {
      if (this.$store.state.user.roles.length > 0) {
        var s = this.$store.state.user.roles.some(role => {
          if (role === this.OAMANAGER) {
            return true
          }
        })
        if (s) {
          return true
        }
      }
      var flag = this.isChargerOrAdmin(this.data, this.departments, 0, this.$store.state.user.userName)
      // console.log(flag)
      return flag
    },
    // 是否是本级部门的【charger】或者【admin】,亦或是父部门的
    isChargerOrAdmin (data, departments, index, username) {
      // console.log(data)
      // console.log(departments)
      // console.log(index)
      // console.log(username)
      var tempData
      if (!username) return false
      var flag = data.some(child => {
        if (child.title === departments[index]) {
          tempData = child
          // console.log('username: ' + username + ' ,charger:' + child.charger + ',admin:' + child.admin + '')
          if (username === child.charger || username === child.admin) { // 是负责人或管理员
            // console.log('-----------true--------')
            return true
          }
        }
      })
      if (flag) {
        return true
      }
      if (index === (departments.length - 1)) {
        return false
      }
      if (tempData.children.length > 0) {
        index++
        return this.isChargerOrAdmin(tempData.children, departments, index, username)
      }
      return false
    }
  }
}
</script>
