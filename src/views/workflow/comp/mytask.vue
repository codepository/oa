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
          xs4
          sm4
          md4
          lg4
        >
          <material-app-card
            :badge-color="card.badgeColor"
            :color="card.color"
            :icon="card.icon"
            :title="card.title"
            :badge="card.badge"
        /> </v-flex>
      </v-layout>
    </material-card>
  </v-flex>
</template>
<script>
export default {
  name: 'Mytask',
  data: () => ({
    cards: [
      { title: '我审批的', icon: 'mdi-gavel', color: 'warning', badge: '6', badgeColor: 'red' },
      { title: '我发起的', icon: 'mdi-airplane-takeoff', color: 'warning' },
      { title: '抄送我的', icon: 'mdi-arrow-right-bold-box', color: 'warning' }
    ]
  })
}
</script>
