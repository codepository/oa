<template>
  <v-layout justify-center>
    <v-dialog
      v-model="dialog1"
      persistent
      max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">流程名称</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex>
                <v-text-field
                  v-model="name"
                  :rules="required"
                  label="流程名"/>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog1 = false">取消</v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="save">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    required: [
      v => !!v || '不能为空'
    ],
    dialog1: false,
    name: ''
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
    save () {
      this.$emit('on-success', this.name)
      this.dialog1 = false
    }
  }
}
</script>
