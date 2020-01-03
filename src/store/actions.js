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

import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqUserInfo,
    reqLogout,
    reqShopGoods,
    reqShopInfo,
    reqShopRatings
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
    },
    async getUserInfo({commit}){
        const result = await reqUserInfo()
        if (result.code === 0) {
            const userInfo = result.data
            commit(RECEIVE_USER_INFO, {userInfo})
        }
    },
    async logout({commit}){
        const result = await reqLogout()
        if (result.code === 0) {
            commit(RESET_USER_INFO)
        }
    },
    async getShopInfo({commit}){
        const result = await reqShopInfo()
        if (result.code === 0) {
            const info = result.data
            commit(RECEIVE_INFO, {info})
        }
    },
    async getShopRatings({commit}){
        const result = await reqShopRatings()
        if (result.code === 0) {
            const ratings = result.data
            commit(RECEIVE_RATINGS, {ratings})
        }
    },
    async getShopGoods({commit}, callback){
        const result = await reqShopGoods()
        if (result.code === 0) {
            const goods = result.data
            commit(RECEIVE_GOODS, {goods})
            callback && callback()
        }
    }
}