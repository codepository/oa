<template>
  <v-app>
    <RegistryForm @on-success="handleSubmit"/>
  </v-app>
</template>
<script>
import RegistryForm from '@/views/login/registry-form'
import { saveUser } from '@/api/user'
export default {
  name: 'Registry',
  components: {
    RegistryForm
  },
  methods: {
    handleSubmit (params) {
      saveUser(params).then(res => {
        alert(res.data.message)
        if (res.data.ok) {
          this.$router.push({
            name: 'login'
          })
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
