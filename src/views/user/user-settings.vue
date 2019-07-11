<template>
  <v-layout
    d-flex
    justify-center
  >
    <v-menu
      bottom
      left
      content-class="dropdown-menu"
      offset-y
      transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        <v-avatar>
          <img
            v-if="$store.state.user.avatar"
            :src="$store.state.user.avatar"
            v-on="on"
          >
          <v-icon
            v-else
            large
            v-on="on">mdi-account-circle</v-icon>
        </v-avatar>
      </template>
      <v-card>
        <v-list dense>
          <v-list-tile
            v-ripple
            v-for="(item, index) in items"
            :key="index"
            @click="onClick(item)"
          >
            <v-list-tile-title
              v-text="item.text"
            />
          </v-list-tile>
          <v-list-tile
            @click="logout">
            <v-list-tile-title v-text="'退出'"/>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
  </v-layout>
</template>
<script>
import {
  mapActions
} from 'vuex'
export default {
  data: () => ({
    items: [
      { text: '修改密码', to: 'updatePass' },
      { text: '用户信息', to: '用户信息' }
    ]
  }),
  methods: {
    ...mapActions(['handleLogOut']),
    logout () {
      this.handleLogOut().then(() => {
        this.$router.push({
          name: 'login'
        })
      })
    },
    onClick (item) {
      this.$router.push({
        name: item.to
      })
    }
  }
}
</script>
