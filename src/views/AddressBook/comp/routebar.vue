<template>
  <v-flex
    xs12
    sm12
    md12
    lg12
    row>
    <v-flex
      v-for="(item, index) in items"
      :key="index"
      style="display:inline-block">
      <div
        style="display:inline-block"
        @click="click(index)">{{ item }}<v-icon>mdi-forward</v-icon></div>
    </v-flex>
  </v-flex>
</template>
<script>

export default {
  props: {
    selected: {
      type: Array,
      default: undefined
    }
  },
  data: () => ({
    isActive: false,
    current: '',
    currentIndex: 0,
    items: []
  }),
  watch: {
    selected: {
      handler (newval, oldval) {
        this.items = newval
        this.currentIndex = this.items.length - 1
        // console.log(newval)
      },
      deep: true
    }
  },
  mounted () {
    this.items = []
    this.items.push(this.$store.state.user.company)
    this.current = this.items.length
  },
  methods: {
    click (index) {
      if (this.currentIndex !== index) {
        this.currentIndex = index
        this.items = this.items.splice(0, index + 1)
        this.$emit('update:selected', this.items)
      }
      // console.log('index, currentindex:', index, this.currentIndex)
    }
  }
}
</script>
