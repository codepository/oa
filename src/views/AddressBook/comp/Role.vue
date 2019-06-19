<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      wrap>
      <!--组织路由栏-->
      <routebar
        ref="r"
        :selected.sync="roles"/>
      <!-- 组织显示栏 -->
      <rolelist
        :selecteditems.sync="roles"
        :selectd.sync="currentRole"/>
    </v-layout>
  </v-container>
</template>
<script>
import routebar from './routebar'
import rolelist from './role/rolelist'
export default {
  name: 'Role',
  components: {
    routebar,
    rolelist
  },
  data: () => ({
    roles: [],
    currentRole: {}
  }),
  methods: {
  }
}
</script>
