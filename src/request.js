import axios from 'axios'
let apiUrl = '/api'
export function get (url, data) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: apiUrl + url,
      data: data || {}
    }).then(res => {
      if (res.status == '200') {
        if (res.data.code == 0) {
          resolve(res.data.data)
        } else {
          if (res.data.message)alert(res.data.message)
        }
      } else {
        reject(res)
      }
    }).catch(e => {
      reject(e)
    })
  })
}
