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
// import store from '@/store'
export default {
  name: 'Operations',
  data () {
    return {
      selected: [2],
      items: [
        {
          action: 'mdi-ambulance',
          title: '流程管理',
          subTitle: '流程',
          postAction: 'mdi-ambulance',
          route: '流程管理'
        }
      ]
    }
  },

  methods: {
    click (route) {
      this.$router.push({
        name: route
      })
      // let routes = this.$router.resolve({ name: route })
      // window.open(routes.href, '_blank')
    }
  }
}
</script>
