<template>
  <v-flex
    xs12
    sm12
    md12
    lg12>
    <v-layout
      row
      wrap>
      <v-flex
        v-for="p in process"
        :key="p.id"
        xs12
        sm6
        md4
        lg3
      >
        <ProcessCard
          :process="p"
          color="green"
          @click.stop="get(p)"
        />
      </v-flex>
    </v-layout>
    <v-bottom-nav v-if="total>0">
      <v-pagination
        :length="length"
        :total-visible="5"
        v-model="pageIndex"
        @input="indexChange"/>
    </v-bottom-nav>
  </v-flex>
</template>
<script>
import ProcessCard from './../comp/ProcessCard'
import { findTask } from '@/api/workflow'
export default {
  name: 'CompleteTable',
  components: {
    ProcessCard
  },
  data: () => ({
    process: [],
    pageIndex: 1,
    pageSize: 10,
    total: 0
  }),
  computed: {
    length () {
      if (this.total === 0) {
        return 0
      }
      return Math.ceil(this.total / this.pageSize)
    }
  },
  mounted () {
    this.getDatas()
  },
  methods: {
    indexChange (val) {
      this.getDatas()
    },
    get (item) {
      this.$router.push({
        name: '流程审批页面',
        query: {
          proc: item
        }
      })
    },
    getDatas () {
      findTask({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }).then(res => {
        this.process = res.data.rows
        this.total = res.data.total
        document.documentElement.scrollTop = 0
      })
    }
  }
}
</script>
