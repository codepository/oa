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
              :src="$store.state.user.image"
            >
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">{{ $store.state.user.company }}</h6>
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
