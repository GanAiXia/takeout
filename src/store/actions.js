import { 
    RECEIVE_ADDRESS,
 } from './mutations-types'

import {
    reqAddress,
} from '../api'

export default {
    async getAddress({commit, state}) {
        const geohash = state.latitude + ',' + state.longitude

        const result = await reqAddress(geohash)
        
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, {address})
        }
    }
}