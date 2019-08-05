<template>
  <v-layout
    style="width:150px;height:60px;margin:0;"
    justify-center
    class="mx-auto">
    <v-btn
      class="mx-1"
      fab
      dark
      color="indigo"
      align-content-center
      @click="click">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
    <AddNodeDialog
      :dialog.sync="dialog"
      :node="node"
      @addnode="addnode"/>
  </v-layout>
</template>
<script>
import AddNodeDialog from './add-node-dialog'
export default {
  name: 'AddNodeBtnBox',
  components: {
    AddNodeDialog
  },
  props: {
    node: {
      type: Object,
      default: undefined
    }
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    click () {
      this.dialog = true
    },
    addnode (node) {
      this.$emit('addnode', node)
    }
  }
}
</script>
