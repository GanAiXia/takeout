// import Vue from 'vue'

import {
    RECEIVE_ADDRESS,
    GET_CATEGORYS,
    GET_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_INFO,
    RECEIVE_RATINGS
} from './mutations-types'

export default {
    [RECEIVE_ADDRESS] (state, {address}){
        state.address = address
    },
    [GET_CATEGORYS] (state, {categorys}){
        state.categorys = categorys
    },
    [GET_SHOPS] (state, {shops}){
        state.shops = shops
    },
    [RECEIVE_USER_INFO] (state, {userInfo}){
        state.userInfo = userInfo
    },
    [RESET_USER_INFO] (state){
        state.userInfo = {}
    },
    [RECEIVE_GOODS] (state, {goods}){
        state.goods = goods
    },
    [RECEIVE_INFO] (state, {info}){
        state.info = info
    },
    [RECEIVE_RATINGS] (state, {ratings}){
        state.ratings = ratings
    },
    
}