<template>
  <v-flex
    xs12
    sm12
    md12
    lg12>
    <v-card>
      <!-- <div class="text-xs-center;">
        <v-btn
          color="primary"
          @click="set">
          <v-icon>mdi-settings</v-icon>设置
        </v-btn>
      </div> -->
      <!------------------------角色------------------------------>
      <v-list subheader>
        <v-list-tile
          v-for="item in items2"
          :key="item.title"
          ripple
          avatar
        >
          <v-list-tile-action>
            <v-icon
              large
              color="indigo">mdi-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content
            @click="handleSelect(item)">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
          <!-- <v-list-tile-action>
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
                    v-for="route in noderoute"
                    :key="route"
                    @click="set(route, item)"
                  >
                    <v-list-tile-title
                      v-text="route"
                    />
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-menu>
          </v-list-tile-action> -->
          <v-list-tile-action
            @click="handleSelect(item)">
            <v-icon>mdi-arrow-right-thick</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <!------------------------用户------------------------------>
      <v-list subheader>
        <v-list-tile
          v-for="item in items"
          :key="item.id"
          avatar
        >
          <v-list-tile-action>
            <v-icon
              large
              color="indigo">mdi-account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content @click="deleteUser(item)">
            <v-list-tile-title>{{ item.username }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon :color="item.active ? 'teal' : 'grey'">mdi-account</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card>
    <!-- ---------------------------菜单----------------------->
    <Menu :role="currentRole"/>
  </v-flex>
</template>
<script>
import { findAllRoletreeAstree, findRoles, deleteRoleById } from '@/api/roletree'
import Menu from './Menu'
export default {
  components: {
    Menu
  },
  props: {
    selecteditems: {
      type: Array,
      default: undefined
    },
    selected: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      role: '',
      company: this.$store.state.user.company,
      data: [],
      // 用户
      items: [],
      // 部门
      items2: [],
      selected1: {},
      // 当前选中的角色
      currentRole: {}
    }
  },
  watch: {
    selecteditems: {
      handler (newval, oldval) {
        this.items = []
        this.items2 = this.getCurRoles(this.data, newval, 0)
      },
      deep: true
    },
    selected1: {
      handler (newval, oldval) {
        this.currentRole = newval
        this.findUserWithRole(newval.title)
        this.$emit('update:selected', this.selected) // 当前选中的部门信息
      }
    }
  },
  mounted () {
    this.getDatas()
  },
  methods: {
    handleSelect (item) {
      this.selecteditems.push(item.title)
      this.currentRole = item
      this.$emit('update:selecteditems', this.selecteditems)
    },
    // 设置当前选中角色
    getCurRoles (childDeparts, selecteditems, index) {
      var destiDepart
      childDeparts.some(child => {
        if (child.title === selecteditems[index]) {
          destiDepart = child
          return true
        }
      })
      if (index === (selecteditems.length - 1)) {
        this.updateCurrentRole(destiDepart)
        return destiDepart.children
      }
      if (destiDepart.children.length > 0) {
        index++
        return this.getCurRoles(destiDepart.children, selecteditems, index)
      } else {
        return []
      }
    },
    updateCurrentRole (destiDepart) {
      var role = {
        id: destiDepart.id,
        title: destiDepart.title,
        parentid: destiDepart.parentid,
        type: destiDepart.type,
        depth: destiDepart.depth,
        company: destiDepart.company
      }
      this.selected1 = role
    },
    getDatas () {
      // console.log('getdatas')
      if (this.company.length === 0) return
      findAllRoletreeAstree({ company: this.company }).then(res => {
        this.data = res.data
        this.items2 = this.data[0].children
        this.currentRole = this.data[0]
        this.selecteditems.push(this.data[0].title)
      })
    },
    findUserWithRole (role) {
      var param = {
        company: this.company,
        role: role
      }
      findRoles(param).then(res => {
        this.items = res.data
      })
    },
    deleteUser (item) {
      // console.log(item)
      this.$Confirm.confirm('确定要删除：' + item.username).then(() => {
        deleteRoleById(item.id).then(res => {
          this.$Message.info(res.data.message)
        })
        // console.log('确定删除')
      }).catch(() => {
        // console.log('不删除')
      })
    }
  }
}
</script>
