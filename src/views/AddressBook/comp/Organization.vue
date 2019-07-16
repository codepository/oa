<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      wrap>
      <!-- 工具栏 -->
      <Menu
        :department.sync="currentdepart"
        :departments="departments"
        :data="data"/>
      <!-- <toolbar :currentdepart.sync="currentdepart"/> -->
      <!--组织路由栏-->
      <routebar
        ref="r"
        :selected.sync="departments"/>
      <!-- <MenuSet :currentdepart.sync="currentdepart"/> -->
      <!-- 组织显示栏 -->
      <showlist
        :departments.sync="departments"
        :currentdepart.sync="currentdepart"
        :data.sync="data"/>
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
    data: [], // 所有部门信息
    departments: [],
    currentdepart: null // 当前选中部门
  }),
  methods: {
  }
}
</script>
