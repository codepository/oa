<template>
  <v-layout
    row>
    <v-dialog
      ref="dialog"
      v-model="modal"
      persistent
      lazy
      width="290px"
      style="display: inline-block;width:100%"
    >
      <v-text-field
        slot="activator"
        v-model="value1"
        :label="label"
        prepend-icon="mdi-account"
        readonly
      />
      <v-card>
        <material-route-bar :selected.sync="selected"/>
      </v-card>
      <v-card>
        <v-list subheader>
          <v-list-tile
            v-for="(item, index) in items"
            :key="index"
            ripple
            avatar
          >
            <v-list-tile-content @click="selectItem(item.title)">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
      <v-btn
        flat
        color="primary"
        @click="modal = false">取消</v-btn>
      <v-btn
        flat
        color="primary"
        @click="ok">确定</v-btn>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: undefined
    },
    data: {
      type: Array,
      default: undefined
    },
    value: {
      type: String,
      default: undefined
    }
  },
  data: () => ({
    modal: false,
    value1: '',
    items: [],
    selected: [],
    data1: []
  }),
  watch: {
    selected: {
      handler (newval) {
        this.value1 = newval.join('/')
        this.items = this.getCurrent(this.data1, newval, 0)
      },
      deep: true
    },
    'data': {
      handler (val) {
        this.initial(val)
      },
      deep: true
    },
    value1 (val) {
      this.$emit('update:value', val)
    }
  },
  mounted () {
  },
  methods: {
    ok () {
      this.modal = false
    },
    initial (data) {
      console.log('-----------initial------------')
      console.log(this.value)
      if (data.length > 0) {
        console.log(data)
        this.data1 = data
        if (this.value) { // 有初始值
          console.log('---------值初始化------------')
          this.value1 = this.value
          var items = this.value1.split('/')
          items.forEach(item => {
            this.selectItem(item)
          })
        } else {
          this.items = data
        }
      }
    },
    selectItem (item) {
      // router 更新
      // console.log(department)
      this.selected.push(item)
    },
    getCurrent (childDeparts, selected, index) {
      var destiDepart
      childDeparts.some(child => {
        if (child.title === selected[index]) {
          destiDepart = child
          return true
        }
      })
      if (index === (selected.length - 1)) {
        return destiDepart.children
      }
      if (destiDepart.children.length > 0) {
        index++
        return this.getCurrent(destiDepart.children, selected, index)
      } else {
        return []
      }
    }
  }
}
</script>
