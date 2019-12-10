// import Vue from 'vue'

import {
    RECEIVE_ADDRESS
} from './mutations-types'

export default {
    [RECEIVE_ADDRESS] (state, {address}){
        state.address = address
    }
}