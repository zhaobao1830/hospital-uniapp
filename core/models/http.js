import Config from '../config/index.js'

export class Http {
	request({
		url,
		data={},
		method = 'GET'
	}) {
		return new Promise((resolve, reject) => {
			this._request(url, resolve, reject, data, method)
		})
	}

	_request(url, resolve, reject, data={}, method='GET') {
		uni.request({
			url: Config.baseUrl + url,
			method: method,
			data: data,
			header: {
				'content-type':'application/json'
			},
			success(res) {
				resolve(res.data)
			},
			fail(err) {
				uni.showToast({
					title: '接口请求失败！'
				})
				reject(err)
			}
		})
	}
}
