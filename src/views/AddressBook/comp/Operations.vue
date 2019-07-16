<template>
  <v-layout row>
    <v-flex
      xs12
      sm12
      md12
      lg12
    >
      <v-card>
        <v-list two-line>
          <v-list-tile
            ripple>
            <v-list-tile-action>
              <v-icon
                large
                color="indigo">mdi-store</v-icon>
            </v-list-tile-action>

            <v-list-tile-content
              @click="setCompany">
              <v-list-tile-title>{{ $store.state.user.company }}</v-list-tile-title>
              <v-list-tile-sub-title>公司</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>mdi-account</v-icon>
              <v-list-tile-action-text>{{ node.charger }}</v-list-tile-action-text>
            </v-list-tile-action>
          </v-list-tile>
          <template v-for="(item, index) in items">
            <v-list-tile
              :key="index"
              ripple
              @click="click(item.route)">
              <v-list-tile-action>
                <v-icon
                  large
                  color="indigo">{{ item.action }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subTitle }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>{{ item.postAction }}</v-icon>
                <v-list-tile-action-text>{{ item.actionText }}</v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider
              v-if="index + 1 < items.length"
              :key="index + 'd'"
            />
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { findAllNodeAsTree } from '@/api/node'
export default {
  name: 'Operations',
  data () {
    return {
      selected: [2],
      node: '',
      items: [
        {
          action: 'mdi-account-multiple',
          title: '组织架构',
          subTitle: '组织架构',
          postAction: 'mdi-account-multiple',
          route: '组织架构'
        },
        {
          action: 'mdi-face',
          title: '角色管理',
          subTitle: '角色管理',
          postAction: 'mdi-face',
          route: '角色管理'
        }
      ]
    }
  },
  mounted () {
    this.getCompanyNode()
  },
  methods: {
    click (route) {
      this.$router.push({
        name: route
      })
      // let routes = this.$router.resolve({ name: route })
      // window.open(routes.href, '_blank')
    },
    setCompany () {
      if (this.$store.state.user.roles.length > 0) {
        var s = this.$store.state.user.roles.some(role => {
          return role === 'OA管理员'
        })
        if (!s) {
          this.$Message.error('只有【OA管理员】才有权限')
          return
        }
      }
      this.$router.push({
        name: '部门设置',
        query: {
          department: this.node
        }
      })
    },
    getCompanyNode () {
      findAllNodeAsTree({ title: this.$store.state.user.company }).then(res => {
        if (res.data) {
          this.node = res.data[0]
          // console.log(this.node)
        }
      })
    }
  }
}
</script>
