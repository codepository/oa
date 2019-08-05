<template>
  <v-layout
    justify-center
    class="mx-auto">
    <div class="my-2">
      <v-btn
        depressed
        small
        color="error"
        @click="addCondition">添加条件</v-btn>
    </div>
  </v-layout>
</template>
<script>
export default {
  name: 'AddBranchBtn',
  methods: {
    addCondition () {
      this.$emit('addCondition')
    }
  }
}
</script>
