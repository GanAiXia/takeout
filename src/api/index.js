import ajax from './ajax'

const BASE_URL = '/api'

//1根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)

//2获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL+ '/index_category')

//3根据经纬度获取商铺列表
export const reqShops = (latitude, longitude) => ajax(BASE_URL + '/shops', {latitude, longitude})

//4根据经纬度和关键字搜索商铺列表
export const reqSearch = (geohash, keyword) => ajax(BASE_URL + '/search_shops', {geohash, keyword})

//6用户名密码登录
export const reqLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')

//7发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', {phone})

//8手机号码验证登录
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')

//9根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')

//10用户登出
export const reqLogout = () => ajax(BASE_URL + '/logout')

export const reqShopInfo = () => ajax('/info')
export const reqShopGoods = () => ajax('/ratings')
export const reqShopRatings = () => ajax('/goods')
