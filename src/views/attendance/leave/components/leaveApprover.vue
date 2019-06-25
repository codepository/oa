<template>
  <div
    id="leave-approver"
    class="leave-approver-wrapper">
    <div
      class="leave-approver">
      <div class="leave-type-lab">审批人</div>
      <div class="leave-type-icon">*</div>
    </div>
    <div
      class="leave-approver-content">
      <div class="leave-approver-names">
        <v-chip
          v-for="(name,index) in names"
          :key="index"
          close
          class="leave-approver-name"
          @input="handleRemoveClick(index)">
          {{ name }}
        </v-chip>
        <div style="display: inline"/>
        <v-dialog
          v-model="show"
          scrollable
          max-width="300px">
          <template
            v-slot:activator="{ on }">
            <v-btn
              class="leave-approver-add"
              v-on="on"
            >
              十
            </v-btn>
          </template>
          <v-card>
            <v-card-title>审批人</v-card-title>
            <v-divider/>
            <v-card-text style="height: 300px;">
              <v-list v-show="show">
                <v-list-tile
                  v-for="(approver,index) in approvers"
                  :key="index"
                  @click="handleApproverClick(approver.name,index)"
                >
                  <v-list-tile-title>
                    {{ approver.name }}
                  </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-card-text>
            <v-divider/>
            <v-card-actions>
              <v-btn
                color="blue darken-1"
                flat
                @click="show = false">Close</v-btn>
              <v-btn
                color="blue darken-1"
                flat
                @click="show = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeaveApprover',
  data () {
    return {
      show: false,
      approvers: [
        {
          id: '1',
          name: '张三一'
        },
        {
          id: '2',
          name: '李四一'
        },
        {
          id: '3',
          name: '王五一'
        },
        {
          id: '4',
          name: '赵六一'
        },
        {
          id: '5',
          name: '马七一'
        },
        {
          id: '5',
          name: '马七一'
        },
        {
          id: '5',
          name: '马七一'
        },
        {
          id: '5',
          name: '马七'
        },
        {
          id: '5',
          name: '马七'
        },
        {
          id: '5',
          name: '马七'
        }
      ],
      names: []
    }
  },
  methods: {
    handleApproverClick (approver, index) {
      this.show = false
      this.names.push(approver)
      this.approvers.splice(index, 1)
    },
    handleRemoveClick (index) {
      this.names.splice(index, 1)
    }
  }
}
</script>

<style lang="stylus">
  .leave-approver-wrapper
    margin-top 1.3rem
    background-color #ffffff
    height 12rem
  .leave-approver
    padding-top .6rem
    margin-left 7.5%
  .leave-approver-add
    width 3rem
    height 3rem
    font-size 1.5rem
    border 1px dashed #cccccc
    border-radius 1.5rem
    background #ffffff !important
    min-width 0
    margin-left 1rem
  .leave-approver-add > .v-btn__content
    color #cccccc !important
  .leave-approver-names
    display inline-block
    float left
    line-height 3rem
    margin-top .5rem
    width 100%
  .leave-approver-name
    margin-bottom .5rem
    margin-left 1rem
    width 5.5rem
    text-align center
  .leave-approver-content
    margin-left 5.5%
</style>

<style lang="scss">
  #leave-approver {
    .v-btn {
      padding: 0px 18px;
    }
  }
</style>
