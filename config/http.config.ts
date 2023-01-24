const httpConfig = {
  BASE_URL: {
    development: 'http://localhost:7001',
    production: '/',
  },
  API_LIST: {
    // 获取验证码
    GET_CODE: '/api/user/getCode',
  },
}
export default httpConfig
