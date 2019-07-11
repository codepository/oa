<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        sm6
        md4
        lg4
      >
        <material-card>
          <v-avatar
            slot="offset"
            class="mx-auto d-block"
            size="130"
          >
            <img
              :src="$store.state.user.avatar"
            >
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">{{ $store.state.user.post }}</h6>
            <h6 class="category text-gray font-weight-thin mb-3">{{ $store.state.user.department }}</h6>
            <h4 class="card-title font-weight-light">{{ $store.state.user.userName }}</h4>
            <h6 class="category text-gray font-weight-thin mb-3">电话:{{ $store.state.user.phone }} &nbsp;&nbsp;&nbsp;&nbsp;邮箱:{{ $store.state.user.email }}</h6>
            <h6
              v-if="$store.state.user.roles"
              class="card-title font-weight-light">角色:{{ $store.state.user.roles.join(',') }}</h6>
            <h6
              v-if="$store.state.user.departments"
              class="card-title font-weight-light">分管部门:{{ $store.state.user.departments.join(',') }}</h6>
            <v-btn
              color="success"
              round
              class="font-weight-light"
              @click="setDepartment"
            >修改部门</v-btn>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'UserProfile',
  methods: {
    setDepartment () {
      this.$router.push({
        name: '用户部门修改',
        query: {
          user: this.$store.state.user.userName
        }
      })
    }
  }
}
</script>
