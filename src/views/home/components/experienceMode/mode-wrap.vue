<template>
  <div class="components-mode-wrap">
    <div class="mode_header">
      <div class="line left-line"></div>
      <div class="inner">{{title}}</div>
      <div class="line right-line"></div>
    </div>
    <div class="mode-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .components-mode-wrap {
    
    .mode_header {
      display: flex;
      align-items: center;
      line-height: 1;
      .line {
        position: relative;
        width: 130px;
        height: 1px;
        background: #66c4cc;
        &.left-line {
          &::after {
            content: '';
            position: absolute;
            display: block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #66c4cc;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        &.right-line {
          flex: 1;
          &::before {
            content: '';
            position: absolute;
            display: block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #66c4cc;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
      .inner {
        font-size: 20px;
        padding: 0 20px;
        color: #327f9b;
        font-weight: bold;
      }
    }
    .mode-content {
      width: 85%;
      margin-left: auto;
      padding: 30px 0;
      padding-right: 20px;
      box-sizing: border-box;
    }
  }
</style>