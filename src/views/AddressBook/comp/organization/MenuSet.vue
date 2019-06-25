<template>
  <v-menu
    content-class="dropdown-menu"
    offset-y
    transition="slide-y-transition">
    <div
      v-ripple
      slot="activator"
    >
      <v-icon>mdi-settings</v-icon>
    </div>
    <v-card>
      <v-list dense>
        <v-list-tile
          v-for="route in routes"
          :key="route"
          @click="set(route)"
        >
          <v-list-tile-title
            v-text="route"
          />
        </v-list-tile>
      </v-list>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  name: 'MenuSet',
  props: {
    currentdepart: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    OAMANAGER: 'OA管理员',
    routes: [
      '添加员工',
      '添加子部门',
      '部门设置'
    ],
    department: {
      id: '',
      title: '',
      charger: ''
    }
  }),
  // watch: {
  //   'currentdepart': {
  //     handler (newval, oldval) {
  //       this.department = newval
  //       console.log(this.department)
  //     },
  //     deep: true
  //   }
  // },
  methods: {
    back () {
      this.$router.go(-1)
    },
    set (route) {
      if (!this.permission()) {
        this.$Message.error('只有【部门负责人】和【' + this.OAMANAGER + '】才有此权限')
        return
      }
      this.currentdepart.children = undefined
      console.log(this.currentdepart)
      this.$router.push({
        name: route,
        query: {
          department: this.currentdepart
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
