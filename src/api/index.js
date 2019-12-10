import ajax from './ajax'

const BASE_URL = '/api'

export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)