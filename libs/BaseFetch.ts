// import { $fetch } from 'ohmyfetch'
// import httpConfig from '~~/config/http.config'
// const { API_LIST, BASE_URL } = httpConfig
// const originalFetch = $fetch.create({})

// const baseUrl = BASE_URL.development

// type BaseFetch = typeof $fetch
// const baseFetch = ((url: string, ...args) => {
//   let configUrl = API_LIST[url]
//   if (configUrl) {
//     // 在config有映射api
//     configUrl = baseUrl + configUrl
//   } else if (url.startsWith('http')) {
//     configUrl = url
//   } else {
//     configUrl = baseUrl + url
//   }
//   console.log('baseFetch url:', configUrl)
//   return originalFetch(configUrl, ...args)
// }) as BaseFetch

// export default baseFetch
