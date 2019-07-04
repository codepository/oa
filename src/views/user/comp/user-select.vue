<template>
  <v-autocomplete
    v-model="user"
    :search-input.sync="search"
    :loading="isLoading"
    :items="users"
    label="用户姓名"
    @change="change"
  ><v-icon slot="prepend">mdi-account</v-icon></v-autocomplete>
</template>
<script>
import { findUsernames } from '@/api/user'
export default {
  name: 'UserSelect',
  props: {
    value: {
      type: String,
      default: undefined
    }
  },
  data: () => ({
    isLoading: false,
    user: '',
    users: [],
    search: null,
    required: [
      v => !!v || '不能为空'
    ]
  }),
  watch: {
    search (val) {
      val = val.trim()
      if (val.length < 1) {
        this.users = []
        return
      }
      if (this.exists(val)) return
      findUsernames({ company: this.$store.state.user.company, username: val }).then(res => {
        this.users = res.data
      })
    }
  },
  methods: {
    change (value) {
      this.user = value
      // console.log(this.user)
      this.$emit('update:value', this.user)
    },
    exists (value) {
      return this.users.some(user => {
        return user.indexOf(value) !== -1
      })
    }
  }
}
</script>
