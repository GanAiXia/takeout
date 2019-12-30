<template>
      <div class="msite">
        <!--首页头部-->
        <TopInfo :title="address.name">
        <i class="iconfont icon-sousuo" slot="left"></i>
        <span class="header_login_text" v-if="!userInfo._id" slot="right">登录/注册</span>
        <span class="header_login_text" v-else slot="right">
          <i class="iconfont icon-person"></i>
        </span>
        </TopInfo>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="categorys.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(cate, index) in categorysArr" :key="index">

                <a href="javascript:" class="link_to_food" v-for="(item, index) in cate" :key="index">
                  <div class="food_container">
                    <img :src="baseImageUrl + item.image_url">
                  </div>
                  <span>{{ item.title }}</span>
                </a>
               
              </div>

            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <img src="./images/msite_back.svg" v-else>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <div class="shop_container">
            <ul class="shop_list" v-if="shops.length" >
              
              <li class="shop_li border-1px" v-for="(shop, index) in shops" :key="index">
                <a>
                  <div class="shop_left">
                    <img class="shop_img" :src="baseImgUrl + shop.image_path">
                  </div>
                  <div class="shop_right">
                    <section class="shop_detail_header">
                      <h4 class="shop_title ellipsis">{{ shop.name }}</h4>
                      <ul class="shop_detail_ul">
                        <li class="supports" v-for="(support, index) in shop.supports" :key="index">
                          {{ support.icon_name }}
                        </li>
                      </ul>
                    </section>
                    <section class="shop_rating_order">
                      <section class="shop_rating_order_left">
                        <Stars :stars="shop.rating" />
                        <div class="rating_section">
                          {{ shop.rating }}
                        </div>
                        <div class="order_section">
                          月售{{ shop.recent_order_num }}单
                        </div>
                      </section>
                      <section class="shop_rating_order_right">
                        <span class="delivery_style delivery_right">{{ shop.delivery_mode.text }}</span>
                      </section>
                    </section>
                    <section class="shop_distance">
                      <p class="shop_delivery_msg">
                        <span>¥{{ shop.float_minimum_order_amount }}起送</span>
                        <span class="segmentation">/</span>
                        <span>配送费约¥{{ shop.float_delivery_fee }}</span>
                      </p>
                    </section>
                  </div>
                </a>
              </li>
             
            </ul>
            <ul v-else>
              <li v-for="(item) in 6" :key="item">
                <img src="./images/shop_back.svg">
              </li>
            </ul>
          </div>
        </div>
      </div>
</template>

<script>
    import TopInfo from '../../components/TopInfo/TopInfo'
    import Stars from '../../components/Stars/Stars'    
    import 'swiper/dist/css/swiper.css'
    import { Swiper } from 'vue-awesome-swiper'
    import { mapState } from 'vuex'  

    export default {
      components:{
          TopInfo,
          Stars
      },
      data() {
        return {
          title: '您的地址是...',
          baseImageUrl: 'https://fuss10.elemecdn.com',
          baseImgUrl: 'http://cangdu.org:8001/img/'

          // some swiper options...
        }

      },
      computed: {
        ...mapState(['address', 'categorys', 'shops', 'userInfo']),
        
        categorysArr(){
          const {categorys} = this
          const arr = []
          let minArr = []

          categorys.forEach(e => {
            if (minArr.length === 8) {
              minArr = []
            }

            if (minArr.length === 0) {              
              arr.push(minArr)
            }

            minArr.push(e)
          })

          return arr
        }
      },
      methods: {
      },
      mounted () {
        this.$store.dispatch('getCategorys')
        this.$store.dispatch('getShops')
        // this.mySwiper.slideTo(3, 1000, false)

        new Swiper('.swiper-container', {
          loop: true,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination'
          },
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true//修改swiper的父元素时，自动初始化swiper
        })

      }
    }
</script>

<style lang="stylus" scoped>
    @import "../../common/stylus/mixins.styl"
  
         .msite  //首页
          width 100%
          .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
          .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
            .shop_container
              margin-bottom 50px
              .shop_list
                .shop_li
                  bottom-border-1px(#f1f1f1)
                  width 100%
                  >a
                    clearFix()
                    display block
                    box-sizing border-box
                    padding 15px 8px
                    width 100%
                    .shop_left
                      float left
                      box-sizing border-box
                      width 23%
                      height 75px
                      padding-right 10px
                      .shop_img
                        display block
                        width 100%
                        height 100%
                    .shop_right
                      float right
                      width 77%
                      .shop_detail_header
                        clearFix()
                        width 100%
                        .shop_title
                          float left
                          width 200px
                          color #333
                          font-size 16px
                          line-height 16px
                          font-weight 700
                          &::before
                            content '品牌'
                            display inline-block
                            font-size 11px
                            line-height 11px
                            color #333
                            background-color #ffd930
                            padding 2px 2px
                            border-radius 2px
                            margin-right 5px
                        .shop_detail_ul
                          float right
                          margin-top 3px
                          .supports
                            float left
                            font-size 10px
                            color #999
                            border 1px solid #f1f1f1
                            padding 0 2px
                            border-radius 2px
                      .shop_rating_order
                        clearFix()
                        width 100%
                        margin-top 18px
                        margin-bottom 8px
                        .shop_rating_order_left
                          float left
                          color #ff9a0d
                          .rating_section
                            float left
                            font-size 10px
                            color #ff6000
                            margin-left 4px
                          .order_section
                            float left
                            font-size 10px
                            color #666
                            transform scale(.8)
                        .shop_rating_order_right
                          float right
                          font-size 0
                          .delivery_style
                            transform-origin 35px 0
                            transform scale(.7)
                            display inline-block
                            font-size 12px
                            padding 1px
                            border-radius 2px
                          .delivery_left
                            color #fff
                            margin-right -10px
                            background-color #02a774
                            border 1px solid #02a774
                          .delivery_right
                            color #02a774
                            border 1px solid #02a774
                      .shop_distance
                        clearFix()
                        width 100%
                        font-size 12px
                        .shop_delivery_msg
                          float left
                          transform-origin 0
                          transform scale(.9)
                          color #666
                        .segmentation
                          color #ccc
</style>