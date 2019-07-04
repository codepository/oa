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
            @click="handleSelect(item.title)">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
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
          </v-list-tile-action>
          <v-list-tile-action
            @click="handleSelect(item.title)">
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

          <v-list-tile-content>
            <v-list-tile-title>{{ item.username }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
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
                    v-for="route in userroute"
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
          </v-list-tile-action>
          <v-list-tile-action>
            <v-icon :color="item.active ? 'teal' : 'grey'">mdi-account</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>
<script>
import { findAllRoletreeAstree, findRoles, deleteRoleById } from '@/api/roletree'
export default {
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
      noderoute: [
        '删除节点',
        '添加角色',
        '角色添加成员'
      ],
      userroute: [
        '删除成员'
      ]
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
        // console.log(newval)
        if (newval.type === '角色') {
          // 员工更新
          this.findUserWithRole(newval.title)
        }
        this.$emit('update:selected', this.selected) // 当前选中的部门信息
      }
    }
  },
  mounted () {
    this.getDatas()
  },
  methods: {
    handleSelect (role) {
      // router 更新
      // console.log(department)
      this.selecteditems.push(role)
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
    set (route, item) {
      switch (route) {
        case '添加角色':
          this.addRole(item)
          break
        case '角色添加成员':
          this.addUser(item)
          break
        case '删除成员':
          this.deleteUser(item)
          break
        default:
          this.$Message.info('暂无此功能')
      }
    },
    deleteUser (item) {
      deleteRoleById(item.id).then(res => {
        this.$Message.info(res.data.message)
      })
    },
    addUser (item) {
      if (!this.permission()) {
        this.$Message.error('需要【OA管理员】角色')
        return
      }
      if (item.type !== '角色') {
        this.$Message.error('只有【角色】才能添加成员')
        return
      }
      this.$router.push({
        name: '角色添加成员',
        query: {
          role: item.title
        }
      })
    },
    addRole (item) {
      if (!this.permission()) {
        this.$Message.error('需要【OA管理员】角色')
        return
      }
      // console.log(item)
      if (item.type !== '节点') {
        this.$Message.error('只有【节点】才能添加角色')
        return
      }
      this.$router.push({
        name: '添加角色',
        query: {
          role: item
        }
      })
    },
    permission () {
      return this.$store.state.user.roles.some(role => {
        return role === 'OA管理员'
      })
    }
  }
}
</script>
