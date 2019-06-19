<template>
  <v-flex
    xs12
    sm12
    md12
    lg12>
    <v-card>
      <!------------------------部门------------------------------>
      <v-list subheader>
        <v-list-tile
          v-for="item in items2"
          :key="item.title"
          ripple
          avatar
          @click="selectDepartment(item.title)"
        >
          <v-list-tile-action>
            <v-icon
              large
              color="indigo">mdi-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon>mdi-arrow-right-thick</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <!------------------------用户------------------------------>
      <v-list subheader>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          avatar
        >
          <v-list-tile-action>
            <v-icon
              large
              color="indigo">mdi-account</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon :color="item.active ? 'teal' : 'grey'">mdi-account</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>
<script>
import { findDepartmentWithCompany, findUsers } from '@/api/node'
export default {
  props: {
    departments: {
      type: Array,
      default: undefined
    },
    currentdepart: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      parentid: '',
      company: this.$store.state.user.company,
      data: [],
      // 用户
      items: [],
      // 部门
      items2: [],
      currentdepart1: {}
    }
  },
  watch: {
    departments: {
      handler (newval, oldval) {
        this.items2 = this.getCurDepartment(this.data, newval, 0)
        // 员工更新
        this.findUserWithParentid(this.parentid)
      },
      deep: true
    },
    currentdepart1: {
      handler (newval, oldval) {
        // console.log(newval)
        this.currentdepart = newval
        this.$emit('update:currentdepart', this.currentdepart) // 当前选中的部门信息
      }
    }
  },
  mounted () {
    this.getDepartment()
  },
  methods: {
    selectDepartment (department) {
      // router 更新
      // console.log(department)
      this.departments.push(department)
      this.$emit('update:departments', this.departments)
    },
    // 设置当前选中部门
    getCurDepartment (childDeparts, departments, index) {
      var destiDepart
      childDeparts.some(child => {
        if (child.title === departments[index]) {
          destiDepart = child
          return true
        }
      })
      if (index === (departments.length - 1)) {
        this.parentid = destiDepart.id
        this.updateCurrentDepart(destiDepart)
        return destiDepart.children
      }
      if (destiDepart.children.length > 0) {
        index++
        return this.getCurDepartment(destiDepart.children, departments, index)
      } else {
        return []
      }
    },
    updateCurrentDepart (destiDepart) {
      var department = {
        id: destiDepart.id,
        title: destiDepart.title,
        charger: destiDepart.charger,
        parentid: destiDepart.parentid,
        type: destiDepart.type,
        depth: destiDepart.depth,
        company: destiDepart.company
      }
      this.currentdepart1 = department
    },
    getDepartment () {
      if (this.company.length === 0) return
      findDepartmentWithCompany(this.company).then(res => {
        this.data = res.data
        this.items2 = this.data[0].children
        this.departments.push(this.data[0].title)
      })
    },
    findUserWithParentid (id) {
      var param = {
        company: this.company,
        parentid: id
      }
      findUsers(param).then(res => {
        this.items = res.data
      })
    }
  }
}
</script>
