<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      wrap>
      <!-- 工具栏 -->
      <Menu :department.sync="currentdepart"/>
      <!-- <toolbar :currentdepart.sync="currentdepart"/> -->
      <!--组织路由栏-->
      <routebar
        ref="r"
        :selected.sync="departments"/>
      <!-- <MenuSet :currentdepart.sync="currentdepart"/> -->
      <!-- 组织显示栏 -->
      <showlist
        :departments.sync="departments"
        :currentdepart.sync="currentdepart"/>
    </v-layout>
  </v-container>
</template>
<script>
import Menu from './organization/Menu'
import routebar from './routebar'
import showlist from './organization/showlist'
// import MenuSet from './organization/MenuSet'
// import toolbar from './organization/toolbar'
export default {
  name: 'Organization',
  components: {
    routebar,
    showlist,
    Menu
  },
  data: () => ({
    departments: [],
    currentdepart: null // 当前选中部门
  }),
  methods: {
  }
}
</script>
