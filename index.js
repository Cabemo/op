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

	constructor(appId, appKey) {
		this.interface = axios.create({
			baseUrl: Ontraport.urls.baseUrl,
			headers: {
				'Api-Appid': appId,
				'Api-key': appKey
			}
		});
	}

	async searchTagIds(keyword) {
		const response = await this.interface.get(Ontraport.urls.objects, {
			params: {
				objectID: Ontraport.objectIDS.tag,
				search: keyword
			}
		});

		return response.data.data;
	}

	async tagContacts(emails, tagID) {
		const response = await this.instance.put();
	}

	async getContactsWithTag(tag) {
		const response = await this.interface.get(Ontraport.urls.objects, {
			params: {
				objectID: Ontraport.objectIDS.contact,
				tag_id: tag
			}
		});

		return response.data.data;
	}
};
