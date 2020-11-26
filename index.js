const axios = require('axios');

exports.Ontraport = class Ontraport {
	interface;

	static urls = {
		baseUrl: 'https://api.ontraport.com/1',
		objects: '/objects',
		contacts: '/Contact'
	};
	static objectIDS = {
		contact: 0,
		tag: 14
	};
	appId;
	apiKey;
	headers;

	constructor(appId, appKey) {
		this.appId = appId;
		this.appKey = appKey;
		this.headers = {
			'Api-Appid': this.appId,
			'Api-key': this.appKey
		}
	}

	async searchTagIds(keyword) {
		const response = await axios.get(`${Ontraport.urls.baseUrl}${Ontraport.urls.objects}`, {
			params: {
				objectID: Ontraport.objectIDS.tag,
				search: keyword
			},
			headers: this.headers
		});

		return response.data.data;
	}

	// async tagContacts(emails, tagID) {
	// 	const response = await this.instance.put();
	// }

	async getContactsWithTag(tag) {
		const response = await axios.get(`${Ontraport.urls.baseUrl}${Ontraport.urls.objects}`, {
			params: {
				objectID: Ontraport.objectIDS.contact,
				tag_id: tag
			},
			headers: this.headers
		});

		return response.data.data;
	}
};
