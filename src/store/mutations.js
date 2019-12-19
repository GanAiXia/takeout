// import Vue from 'vue'

import {
    RECEIVE_ADDRESS,
    GET_CATEGORYS,
    GET_SHOPS,
    RECEIVE_USER_INFO
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
    }
}