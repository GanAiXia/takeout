import { 
    RECEIVE_ADDRESS,
    GET_CATEGORYS,
 } from './mutations-types'

import {
    reqAddress,
    reqFoodCategorys
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
    }
}