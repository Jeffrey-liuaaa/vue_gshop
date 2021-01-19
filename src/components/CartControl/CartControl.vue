<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-remove" v-if="food.count>0" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count>0">{{food.count}}</div>
    <div class="iconfont icon-jia-tianchong" @click.stop="updateFoodCount(true)"></div>  <!-- 阻止冒泡 -->
  </div>
</template>

<script type="text/ecmascript-6">
  import throttle from 'lodash/throttle'
  export default {
    props: {
      // count: Number,
      food: Object
    },

    methods: {
       // 没节流限制
      updateFoodCount2: function (isAdd) { // 对处理事件的函数节流处理
        console.log('add22...')
        /* 
        问题1: 不应该直接在此更新, 这个不是当前组件的
        问题2: 开始count值是undefined
        */
        // this.food.count++
        this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
      },
      // 有节流
      // 更新food的count
      updateFoodCount: throttle(function(isAdd) { // 对处理事件的函数节流处理
        console.log('updateFoodCount---')
        /* 
        问题1: 不应该直接在此更新, 这个food不是当前组件的
        问题2: 开始count值是undefined
        */
        // this.food.count++
        const {food} = this
        // 通知action更新
        this.$store.dispatch('updateFoodCount', {food, isAdd})
      }, 1000, {trailing: false}) // 在1s内多次点击, 只响应第一次点击(默认是响应2次, 且第2次是在过了1s后才响应)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon-remove
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active, &.move-leave-active
        transition all .5s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-jia-tianchong
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green

 
</style>
