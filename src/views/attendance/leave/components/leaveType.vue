<template>
  <div class="leave-wrapper">
    <div class="leave-type">
      <div class="leave-type-lab">请假类型</div>
      <div class="leave-type-icon">*</div>
    </div>
    <div
      v-if="showType"
      class="leave-type-btn">
      <button
        :disabled="isabled"
        :class="[isClick === '年假'?'btn-click':'']"
        class="btn-border"
        @click="handleLeaveBtnClick('年假')">年假
        <div class="btn-content">
          剩0天
        </div>
      </button>
      <div
        v-if="isClick === '年假'"
        class="btn-selected">√
      </div>
      <button
        :class="[isClick === '事假'?'btn-click':'']"
        class="btn-border"
        @click="handleLeaveBtnClick('事假')">事假
      </button>
      <div
        v-if="isClick === '事假'"
        class="btn-selected">√
      </div>
      <button
        :class="[isClick === '病假'?'btn-click':'']"
        class="btn-border"
        @click="handleLeaveBtnClick('病假')">病假
      </button>
      <div
        v-if="isClick === '病假'"
        class="btn-selected">√
      </div>
      <button
        :class="[isClick === '婚假'?'btn-click':'']"
        class="btn-border"
        @click="handleLeaveBtnClick('婚假')">婚假
      </button>
      <div
        v-if="isClick === '婚假'"
        class="btn-selected">√
      </div>
      <button
        :class="[isClick === '产假'?'btn-click':'']"
        class="btn-border"
        @click="handleLeaveBtnClick('产假')">产假
      </button>
      <div
        v-if="isClick === '产假'"
        class="btn-selected">√
      </div>
      <button
        :class="[isClick === '陪产假'?'btn-click':'']"
        class="btn-border"
        @click="handleLeaveBtnClick('陪产假')">陪产假
      </button>
      <div
        v-if="isClick === '陪产假'"
        class="btn-selected">√
      </div>
      <button
        :class="[isClick === '丧假'?'btn-click':'']"
        class="btn-border"
        @click="handleLeaveBtnClick('丧假')">丧假
      </button>
      <div
        v-if="isClick === '丧假'"
        class="btn-selected">√
      </div>
      <button
        :class="[isClick === '调休假'?'btn-click':'']"
        class="btn-border"
        @click="handleLeaveBtnClick('调休假')">调休假
      </button>
      <div
        v-if ="isClick === '调休假'"
        class="btn-selected">√
      </div>
      <div class="leave-type-sq">
        <v-btn
          flat
          small
          class="sq-stl"
          @click="handleSqClick">
          收起<v-icon class="retractable-stl">mdi-arrow-up</v-icon>
        </v-btn>
      </div>
    </div>
    <div v-else>
      <div class="leave-type-sq">
        <v-btn
          flat
          small
          class="sq-stl"
          @click="handleDkClick">
          打开<v-icon class="retractable-stl">mdi-arrow-down</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeaveType',
  data () {
    return {
      picked: '',
      isabled: true,
      isClick: '-1',
      showType: true
    }
  },
  methods: {
    handleLeaveBtnClick (index) {
      this.isClick = index
    },
    handleSqClick () {
      this.showType = false
    },
    handleDkClick () {
      this.showType = true
    }
  }
}
</script>

<style lang="stylus">
  .leave-type
    margin-left .8rem
    background-color #ffffff
    margin-top -15px
    padding-top .6rem
  .leave-type-lab
    font-size .95rem
    display inline-block
  .leave-type-icon
    display inline-block
    color #E97333
    line-height .9rem
    vertical-align middle
    margin-left .4rem
  .leave-type-btn
    line-height 29px
    text-align center
    background-color #ffffff
    padding-right .8rem
  .btn-border
    display inline-block
    border 1px solid #a7a7a7
    width 21%
    border-radius 3px
    font-size .6rem
    color #767676
    margin-left 3.5%
    line-height 2rem
    text-align center
    margin-top 1.1rem
  .btn-content
    display inline-block
    color #C9C9C9
    font-size .4rem !important
  [disabled]
    border-color #E5E5E5
    color #a7a7a7
  .btn-click
    color #E97333
    border-color #E97333
    margin-right -.8rem
  .btn-selected
    background-color #E97333
    display inline-block
    width .8rem
    height .8rem
    color #ffffff
    border-radius .4rem
    font-size .8rem
    line-height .8rem
    bottom .8rem
    position relative
    left .3rem
  .leave-wrapper
    background-color #ffffff
  .retractable-stl > .v-btn .v-icon
    font-size .6rem
  .sq-stl > .v-btn__content
    font-size .6rem
    color #767676 !important
    text-align center
    margin-top .2rem
  .leave-type-sq
    width 100%
    text-align center
    height 50px
</style>
