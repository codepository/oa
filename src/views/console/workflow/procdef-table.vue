<template>
  <material-card
    color="green"
    title="流程"
    text="流程明细"
  >
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
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
        <td>{{ item.name }}</td>
        <td>{{ item.version }}</td>
        <td>{{ item.userid }}</td>
        <td class="text-xs-right">{{ item.deployTime.substring(0, 10) }}</td>
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
import { findProcdef } from '@/api/workflow'
export default {
  data: () => ({
    total: 1,
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    headers: [
      {
        sortable: false,
        text: '流程',
        value: 'name'
      },
      {
        sortable: false,
        text: '版本',
        value: 'version'
      },
      {
        sortable: false,
        text: '创建人',
        value: 'userid'
      },
      {
        sortable: false,
        text: '部署',
        value: 'deployTime',
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
    this.getDatas()
  },
  methods: {
    indexChange (val) {
      this.getDatas()
    },
    getDatas () {
      findProcdef(this.params).then(res => {
        this.items = res.data.rows
        this.total = res.data.total
      })
    }
  }
}
</script>
