// import httpConfig from '~~/config/http.config'
import baseFetch from '~~/libs/BaseFetch'

// const { GET_CODE } = httpConfig.API_LIST
export function getCode() {
  baseFetch('GET_CODE', { params: { email: '1450985273@qq.com' } })
}
