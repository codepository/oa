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
          @click="click(p.id)"
        />
      </v-flex>
    </v-layout>
    <v-bottom-nav>
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
  name: 'UncompleteTable',
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
    click (id) {
      // console.log(id)
      this.$router.push({
        name: '流程审批页面',
        query: {
          procInstID: id
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
