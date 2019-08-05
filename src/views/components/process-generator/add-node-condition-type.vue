<template>
  <v-dialog
    v-model="dialog1"
    max-width="400"
  >
    <v-card>
      <v-container>
        <v-layout row>
          <v-layout
            v-for="(item, index) in items"
            :key="index"
            column>
            <div><v-icon
              left
              large
              color="green darken-2"
              @click="click(item)">{{ item.icon }}</v-icon></div>
            <div>{{ item.text }}</div>
          </v-layout>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    node: {
      type: Object,
      default: undefined
    }
  },
  data: () => ({
    dialog1: false,
    items: [
      { icon: 'mdi-arrow-expand-horizontal', text: '范围', type: 'dingtalk_actioner_range_condition' },
      { icon: 'mdi-alphabetical', text: '值', type: 'dingtalk_actioner_value_condition' }
    ]
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
    click (item) {
      this.dialog1 = false
      this.$emit('addCondition', item.type)
    }
  }
}
</script>
