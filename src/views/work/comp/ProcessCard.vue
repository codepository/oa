<template>
  <v-card
    v-bind="$attrs"
    :style="styles"
    v-on="$listeners"
    @click="click"
  >
    <helper-offset
      v-if="hasOffset"
      :inline="inline"
      :full-width="fullWidth"
    >
      <v-card
        v-if="!$slots.offset"
        :color="color"
        class="v-card--material__header"
        dark
      >
        <slot
          v-if="!process"
          name="header"
        />
        <span v-else>
          <h4
            class="title font-weight-light mb-2"
            v-text="process.startUserId + '-' + process.procDefName"
          />
          <p
            class="category font-weight-thin"
            v-text="'流程类型:'+process.procDefName"
          />
          <p
            class="category font-weight-thin"
            v-text="'申请日期:'+process.startTime"
          />
          <p
            class="category font-weight-thin"
            v-text="'申请人:'+process.startUserId"
          />
          <p
            class="category font-weight-thin"
            v-text="'部门:'+process.department"
          />
          <p
            class="category font-weight-thin"
            v-text="'审批人:'+process.candidate"
          />
        </span>
      </v-card>
      <slot
        v-else
        name="offset"
      />
    </helper-offset>

    <!-- <v-card-text>
      <slot />
    </v-card-text>

    <v-divider
      v-if="$slots.actions"
      class="mx-3"
    />

    <v-card-actions v-if="$slots.actions">
      <slot name="actions" />
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  name: 'ProcessCard',
  inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: 'secondary'
    },
    elevation: {
      type: [Number, String],
      default: 10
    },
    inline: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    offset: {
      type: [Number, String],
      default: 24
    },
    title: {
      type: String,
      default: undefined
    },
    text: {
      type: String,
      default: undefined
    },
    process: {
      type: Object,
      default: undefined
    }
  },

  computed: {
    hasOffset () {
      return this.$slots.header ||
        this.$slots.offset ||
        this.process ||
        this.text
    },
    styles () {
      if (!this.hasOffset) return null

      return {
        marginBottom: `${this.offset * 0.2}px`,
        marginTop: `${this.offset * 1}px`
      }
    }
  },
  created () {
    console.log('新建了card')
  },
  methods: {
    click () {
      // console.log('click')
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
  .v-card--material {
    &__header {
      &.v-card {
        border-radius: 4px;
      }
    }
  }
</style>
