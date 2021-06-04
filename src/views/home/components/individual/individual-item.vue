<template>
  <div class="individual-item">
    <span class="circle"></span>
    <span class="individual-item_inner">
      <slot>{{text}}</slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  .individual-item {
    position: relative;
    line-height: 1.5;
    font-size: 15px;
    color: #000;
    
    .circle {
      display: block;
      position: absolute;
      left: 0;
      top: 5px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #6dc7cf;
      opacity: .6;
    }
    .individual-item_inner {
      padding-left: 20px;
      position: relative;
      // padding-left: 20px;
    }
  }
  .individual-item + .individual-item {
    margin-top: 10px;
  }
</style>