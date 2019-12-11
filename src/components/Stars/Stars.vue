<template>
    <div class="star star-24">
        <span class="star-item" v-for="(item, index) in computStars" :key="index" :class="item"></span>
    </div>
</template>

<script>
  // 类名常量
  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'
    export default {
        props: ['stars'],
        computed: {
            computStars(){
                const {stars} = this
                const scs = []

                const starsInter = Math.floor(stars)

                for (let i = 0; i < starsInter; i++) {
                    scs.push(CLASS_ON)
                }

                if (stars*10 - starsInter*10 >= 5) {
                    scs.push(CLASS_HALF)
                }

                if (scs.length < 5) {
                    scs.push(CLASS_OFF)
                }

                return scs
            }
        }
    }
</script>

<style scoped lang="stylus">
@import "../../common/stylus/mixins.styl"
.star 
  float left
  font-size 0
  .star-item
    display inline-block
    background-repeat no-repeat
  &.star-48
    .star-item
      width 20px
      height 20px
      margin-right 22px
      background-size 20px 20px
      &:last-child
        margin-right: 0
      &.on
        bg-image('./stars/star48_on')
      &.half
        bg-image('./stars/star48_half')
      &.off
        bg-image('./stars/star48_off')
  &.star-36
    .star-item
      width 15px
      height 15px
      margin-right 6px
      background-size 15px 15px
      &:last-child
        margin-right 0
      &.on
        bg-image('./stars/star36_on')
      &.half
        bg-image('./stars/star36_half')
      &.off
        bg-image('./stars/star36_off')
  &.star-24
    .star-item
      width 10px
      height 10px
      margin-right 3px
      background-size 10px 10px
      &:last-child
        margin-right 0
      &.on
        bg-image('./stars/star24_on')
      &.half
        bg-image('./stars/star24_half')
      &.off
        bg-image('./stars/star24_off')
</style>