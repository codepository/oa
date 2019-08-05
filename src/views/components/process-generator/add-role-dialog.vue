<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog1"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          添加角色
        </v-card-title>

        <v-card-text>
          <RoleCascader
            :label.sync="role"/>
        </v-card-text>

        <v-divider/>

        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="primary"
            text
            @click="ok"
          >
            确定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import RoleCascader from '@/views/user/comp/role-cascader'
export default {
  components: {
    RoleCascader
  },
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dialog1: false,
    role: null
  }),
  watch: {
    'dialog' (val) {
      this.dialog1 = val
    },
    dialog1 (val) {
      this.$emit('update:dialog', val)
    }
  },
  methods: {
    ok () {
      var temp = this.role.split('/')
      var result = this.role
      if (temp.length > 1) {
        result = temp[temp.length - 1]
      }
      this.$emit('update:role', result)
      this.dialog1 = false
      // console.log(result)
    }
  }
}
</script>
