<template>
  <div class="projecte-basic">
    <div class="projecte-item_title">
      <slot name="name"></slot>
    </div>
    <div class="projecte-item_content">
      <individualWrap>
        <individualItem>
          <span class="projecte-label">项目介绍：</span>
          <span class="projecte-item_inner">
            <slot name="desc"></slot>
          </span>
        </individualItem>

        <individualItem v-if="$slots.link">
          <span class="projecte-label">项目链接：</span>
          <span class="projecte-item_inner">
            <slot name="link"></slot>
          </span>
        </individualItem>

        <individualItem v-if="$slots.otherName" class="otherName-wrap">
          <span class="projecte-label"><slot name="otherName"></slot></span>
          <div class="projecte-item_inner otherName">
            <slot name="otherContent"></slot>
          </div>
        </individualItem>

        <individualItem v-if="$slots.otherName1" class="otherName-wrap">
          <span class="projecte-label"><slot name="otherName1"></slot></span>
          <div class="projecte-item_inner otherName">
            <slot name="otherContent1"></slot>
          </div>
        </individualItem>

        <!-- <individualItem v-if="$slots.otherName1">
          <div style="margin-top: 15px;margin-bottom: 15px;">
            <p class="projecte-label"><slot name="otherName1"></slot></p>
            <div class="projecte-item_inner">
              <slot name="otherContent1"></slot>
            </div>
          </div>
        </individualItem> -->

        <individualItem v-if="$slots.difficulty">
          <span class="projecte-label">项目难点：</span>
          <span class="projecte-item_inner">
            <slot name="difficulty"></slot>
          </span>
        </individualItem>

        <individualItem>
          <span class="projecte-label">核心技术：</span>
          <span class="projecte-item_inner">
            <slot name="dec"></slot>
          </span>
          </individualItem>

          <individualItem v-if="$slots.github">
            <span class="projecte-label">github地址：</span>
            <span class="projecte-item_inner">
              <slot name="github"></slot>
            </span>
          </individualItem>
      </individualWrap>
    </div>
  </div>
</template>

<script>
import individualWrap from './individual/individual-wrap'
import individualItem from './individual/individual-item'
export default {
  components: {
    individualWrap,
    individualItem
  },
}
</script>

<style lang="scss">
  .projecte-basic {
    .projecte-item_title {
      font-size: 16px;
      color: #000;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .projecte-item_content {
      .projecte-link {
        cursor: pointer;
        color: #06f;
        font-size: 15px;
      }
      .projecte-item_inner {
        line-height: 1.8;
        &.otherName {
          margin-top: 6px;
        }
        // font-size: 14px;
      }
      .projecte-label {
        color: #000;
        font-weight: bold;
        font-size: 14px;
      }
    }
    .circle {
      top: 8px;
    }
    .otherName-wrap {
      .circle {
        top: 6px;
      }
    }
  }

  .projecte-basic + .projecte-basic {
    margin-top: 45px;
  }
</style>