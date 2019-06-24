<template>
  <v-flex
    xs12
    sm12
    md12
    lg12
  >
    <material-card
      class="card-tabs">
      <v-layout
        row
        wrap
      >
        <v-flex
          v-for="card in cards"
          :key="card.title"
          xs3
          sm2
          md2
          lg1
        >
          <material-app-card
            :badge-color="card.badgeColor"
            :color="card.color"
            :icon="card.icon"
            :title="card.title"
            :badge="card.badge"
            @click="click(card.title)"
        /> </v-flex>
      </v-layout>
    </material-card>
  </v-flex>
</template>
<script>
export default {
  name: 'Process',
  data: () => ({
    cards: [
      { title: '请假', icon: 'mdi-gavel', color: 'primary' },
      { title: '出差', icon: 'mdi-airplane-takeoff', color: 'primary' },
      { title: '外出', icon: 'mdi-arrow-right-bold-box', color: 'primary' },
      { title: '加班', icon: 'mdi-gavel', color: 'warning' },
      { title: '补卡申请', icon: 'mdi-airplane-takeoff', color: 'warning' },
      { title: '报销', icon: 'mdi-arrow-right-bold-box', color: 'warning' }
      // { title: '请假', icon: 'mdi-gavel', color: 'primary' },
      // { title: '出差', icon: 'mdi-airplane-takeoff', color: 'primary' }
      // { title: '外出', icon: 'mdi-arrow-right-bold-box', color: 'primary' },
      // { title: '加班', icon: 'mdi-gavel', color: 'warning' },
      // { title: '补卡申请', icon: 'mdi-airplane-takeoff', color: 'warning' },
      // { title: '报销', icon: 'mdi-arrow-right-bold-box', color: 'warning' }
    ]
  }),
  methods: {
    click (title) {
      if (title === '请假') {
        this.$router.push('/leave')
      } else {
        this.$Message.info(title + ' 暂不可用')
      }
    }
  }
}
</script>
