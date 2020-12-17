const axios = require('axios');
const validator = require('validator');
module.exports = class Ontraport {
	interface;

	static urls = {
		baseUrl: 'https://api.ontraport.com/1',
		objects: '/objects',
		objectsTagged: '/objects/tag',
		tagObject: '/objects/tag',
		objectIDByEmail: '/object/getByEmail',
		contacts: '/Contact'
	};
	static objectIDS = {
		contact: 0,
		tag: 14
	};
	client;

	constructor(appId, appKey) {
		this.client = axios.create({
			baseURL: Ontraport.urls.baseUrl,
			headers: {
				'Api-Appid': appId,
				'Api-Key': appKey,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
	}

	async searchTagIds(keyword) {
		const response = await this.client.get(Ontraport.urls.objects, {
			params: {
				objectID: Ontraport.objectIDS.tag,
				search: keyword
			}
		});

		return response.data.data;
	}

	async tagContact(email, tagID) {
		let response;

		if (typeof email !== 'string') {
			throw new Error('Email must be a string');
		}
		if (!validator.isEmail(email)) {
			throw new Error('Invalid email format');
		}

		try {
			response = await this.client.get(Ontraport.urls.objectIDByEmail, {
				params: {
					objectID: Ontraport.objectIDS.contact,
					email: email
				}
			});

			const contact = response.data.data;

			response = await this.client.put(Ontraport.urls.tagObject, {
				objectID: Ontraport.objectIDS.contact,
				add_list: tagID,
				ids: contact.id
			});
			return response.data.data;

		} catch (err) {
			throw new Error(err.response.data);
		}

	}

	async getContactsWithTag(tag, select = 'email') {
		let response;

		if (typeof select !== 'string') {
			throw new Error('Invalid select option. Must be a string');
		}
		else if (typeof tag !== 'number' && typeof tag !== 'string') {
			throw new Error('Invalid tag value. Must be a string or number');
		}

		const params = {
			objectID: Ontraport.objectIDS.contact,
			tag_id: tag,
			listFields: select
		};

		params.count = true;
		response = await this.client(Ontraport.urls.objectsTagged, { params });

		const count = parseInt(response.data.data.count);
		let result = [];

		params.count = false;
		params.start = 0;
		while (params.start <= count) {
			const response = await this.client(Ontraport.urls.objectsTagged, { params });
			params.start += 50;
			result = result.concat(response.data.data);
		}
		return result;
	}
};
