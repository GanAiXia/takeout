// import Vue from 'vue'

import {
    RECEIVE_ADDRESS,
    GET_CATEGORYS,
} from './mutations-types'

export default {
    [RECEIVE_ADDRESS] (state, {address}){
        state.address = address
    },
    [GET_CATEGORYS] (state, {categorys}){
        state.categorys = categorys
    }
}