import { 
    RECEIVE_ADDRESS,
    GET_CATEGORYS,
    GET_SHOPS,
    RECEIVE_USER_INFO
 } from './mutations-types'

import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
} from '../api'

export default {
    async getAddress({commit, state}) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, {address})
        }
    },
    async getCategorys({commit}){
        const result = await reqFoodCategorys()
        
        if (result.code === 0) {
            const categorys = result.data
            commit(GET_CATEGORYS, {categorys})
        }
    },
    async getShops({commit, state}){

        const geohash = state.latitude + ',' + state.longitude

        const result = await reqShops(geohash)

        if (result.code === 0) {
            const shops = result.data
            commit(GET_SHOPS, {shops})
        }
    },
    recordUser({commit}, userInfo){
        commit(RECEIVE_USER_INFO, {userInfo})
    }
}