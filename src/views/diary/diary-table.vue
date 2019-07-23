<template>
  <material-card
    color="green"
    title="工作日志"
    text="项目信息"
  >
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      show-select
    >
      <template
        slot="headerCell"
        slot-scope="{ header }"
      >
        <span
          class="subheading font-weight-light text-success text--darken-3"
          v-text="header.text"
        />
      </template>
      <template
        slot="items"
        slot-scope="{ item }"
      >
        <tr @click="getMark(item)">
          <td>{{ item.projectContent }}</td>
          <td>{{ item.startDate.substring(0,10) }}</td>
          <td>{{ item.endDate.substring(0,10) }}</td>
          <td class="text-xs-right">{{ item.progress }}</td>
        </tr>
      </template>
    </v-data-table>
    <v-bottom-nav v-if="total>0">
      <v-pagination
        :length="length"
        :total-visible="5"
        v-model="params.pageIndex"
        @input="indexChange"/>
    </v-bottom-nav>
  </material-card>
</template>
<script>
import { findAllDiary } from '@/api/workdiary'
export default {
  data: () => ({
    total: 1,
    params: {
      pageIndex: 1,
      pageSize: 10,
      userId: ''
    },
    headers: [
      {
        sortable: false,
        text: '项目名',
        value: 'projectContent'
      },
      {
        sortable: false,
        text: '开始日期',
        value: 'startDate'
      },
      {
        sortable: false,
        text: '结束日志',
        value: 'endDate'
      },
      {
        sortable: false,
        text: '进度',
        value: 'progress',
        align: 'right'
      }
    ],
    items: [
    ]
  }),
  computed: {
    length () {
      if (this.total === 0) {
        return 0
      }
      return Math.ceil(this.total / this.params.pageSize)
    }
  },
  mounted () {
    this.params.userId = this.$store.state.user.userId
    this.getDatas()
  },
  methods: {
    indexChange (val) {
      this.getDatas()
    },
    getDatas () {
      findAllDiary(this.params).then(res => {
        this.items = res.data.rows
        this.total = res.data.total
      })
    },
    getMark (item) {
      item.startDate = item.startDate.substring(0, 10)
      item.endDate = item.endDate.substring(0, 10)
      this.$router.push({
        name: '更新工作日志',
        query: {
          item: item
        }
      })
    }
  }
}
</script>
