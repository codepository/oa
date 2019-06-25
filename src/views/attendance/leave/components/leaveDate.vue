<template>
  <div
    id="leave-date-layout"
    class="leave-date">
    <div class="leave-date-wrapper">
      <div class="leave-start-date">
        <div class="leave-type-lab">开始时间</div>
        <div class="leave-type-icon">*</div>
      </div>
      <v-layout
        row
        wrap>
        <v-flex
          xs12
          sm6
          md4>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="date"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="300px"
          >
            <template
              v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                class="leave-date"
                readonly
                v-on="on"
                @click="handleTextClick(date)"
              />
            </template>
            <v-date-picker
              id="leave-date"
              v-model="date"
              scrollable
              locale="zh-cn"
              color="blue"/>
            <v-time-picker
              v-if="menu"
              v-model="time"
              format="24hr"
              @click:minute="$refs.menu.save(date + '  ' + time)"
            />
          </v-menu>
        </v-flex>
      </v-layout>
    </div>
    <div class="leave-date-wrapper">
      <div class="leave-start-date">
        <div class="leave-type-lab">结束时间</div>
        <div class="leave-type-icon">*</div>
      </div>
      <v-layout
        row
        wrap>
        <v-flex
          xs12
          sm6
          md4>
          <v-menu
            ref="menu2"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="date2"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="300px"
          >
            <template
              v-slot:activator="{ on }">
              <v-text-field
                v-model="date2"
                class="leave-date"
                readonly
                v-on="on"
                @click="handleText2Click()"
              />
            </template>
            <v-date-picker
              id="leave-date"
              v-model="date2"
              scrollable
              locale="zh-cn"
              color="blue"/>
            <v-time-picker
              v-if="menu2"
              v-model="time2"
              format="24hr"
              @click:minute="$refs.menu2.save(date2 + ' ' + time2)"
            />
          </v-menu>
        </v-flex>
      </v-layout>
    </div>
    <div class="leave-date-wrapper">
      <div class="under-line"/>
      <div class="leave-start-date">
        <div class="leave-type-lab">请假天数</div>
        <div class="leave-type-icon">*</div>
      </div>
      <div class="leave-day">
        <v-text-field
          v-model.number="leavedays"
          type="number"
          step="0.5"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeaveDate',
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    menu: false,
    menu2: false,
    time: null,
    time2: null,
    leavedays: 0
  }),
  methods: {
    handleTextClick () {
      this.time = this.date.substr(12, 5)
      this.date = this.date.substr(0, 10)
    },
    handleText2Click () {
      this.time2 = this.date2.substr(12, 5)
      this.date2 = this.date2.substr(0, 10)
    }
  }
}
</script>

<style lang="stylus">
  .leave-date
    background-color #ffffff
  .leave-date-wrapper
    width 100%
    height 2.8rem
    margin-top 1.3rem
  .primary
    height 5.5rem
  .v-btn.v-btn--outline
    border-color #2196F3
  .leave-start-date
    background-color #ffffff
    padding-top .6rem
    display inline-block
    margin-left 10%
  .under-line
    background-color #EEEEEE
    width 100%
    height 1px
    margin-top .8rem
    text-align center
  .leave-day
    display inline-block
    width 10%
    text-align right
    float right
    margin-right 10%
    margin-top -.8rem
</style>

<style lang="scss">
  #leave-date {
    .v-btn__content {
      color: #000000;
    }
    .v-btn {
      padding: 0px 18px;
    }
  }
  #leave-date-layout {
    .wrap {
      position: relative;
      display: block;
      width: 35%;
      float: right;
      bottom: 25%;
      margin-right: 10%;
    }
    .flex.sm6 {
      max-width: 100% !important;
    }
    .v-text-field input {
      text-align: center !important;
    }
    .layout.row {
      height: 1rem;
    }
  }
</style>
