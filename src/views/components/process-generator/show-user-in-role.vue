<template>
  <v-layout
    column>
    <p>{{ role }}</p>
    <v-divider/>
    <p
      v-if="items.length == 0"
      style="color: red;">请添加角色成员</p>
    <p
      v-for="(item, index) in items"
      :key="index"><span><v-icon>mdi-account</v-icon></span>{{ item.username }}</p>
    <v-divider/>
  </v-layout>
</template>
<script>
import { findRoles } from '@/api/roletree'
export default {
  name: 'ShowUserInRole',
  props: {
    role: {
      type: String,
      default: undefined
    }
  },
  data: () => ({
    item: 1,
    items: []
  }),
  watch: {
    'role' (val) {
      this.getData()
    }
  },
  methods: {
    getData () {
      findRoles({
        company: this.$store.state.user.company,
        role: this.role
      }).then(res => {
        this.items = res.data
        if (this.items.length > 0) {
          this.$emit('update:count', this.items.length)
        }
      })
    }
  }
}
</script>
