<template>
  <v-toolbar
    :color="primary"
    dark>
    <v-toolbar-title @click="back"><v-icon>mdi-arrow-left</v-icon></v-toolbar-title>
    <v-spacer/>
    <v-text-field
      class="mr-4 mt-2 purple-input"
      label="查询员工..."
      hide-details
      color="purple"
    />
    <v-menu
      bottom
      left
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
  </v-toolbar>
</template>
<script>
import searchbar from './searchbar'
export default {
  components: {
    searchbar
  },
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
  watch: {
    'currentdepart': {
      handler (newval, oldval) {
        this.department = newval
        // console.log('change')
      },
      deep: true
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    set (route) {
      if (!this.permission()) {
        this.$Message.error('只有【部门负责人】和【' + this.OAMANAGER + '】才有此权限')
        return
      }
      // console.log(this.department.title)
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
