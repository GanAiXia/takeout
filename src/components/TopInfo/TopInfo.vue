<template>
    <div class="msite_header">
        <router-link class="header_search" to="/search">
        <slot name="left"></slot>
        </router-link>
        <span class="header_title">
        <span class="header_title_text ellipsis">{{title}}</span>
        </span>
        <router-link :to="userInfo._id ? '/userInfo' : '/login'" class="header_login">
        <slot name="right"></slot>
        </router-link>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        props: ['title'],
        computed: {
            ...mapState(['userInfo'])
        }
    }
</script>

<style lang="stylus" scoped>
 .msite_header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        color #fff
        .icon-sousuo
            font-size 25px
            color #fff
    .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
            font-size 20px
            color #fff
            display block
    .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
            color #fff
</style>