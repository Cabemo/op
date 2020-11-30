const Ontraport = require('./index');
const dotenv = require('dotenv');

dotenv.config();
const op = new Ontraport(process.env.ONTRAPORT_APP_ID, process.env.ONTRAPORT_API_KEY);

describe('Get contacts with tag', () => {
	it('Returns array of contacts with tag', async () => {
		const result = await op.getContactsWithTag('267');
		expect(result).toHaveProperty([Object]);
	});
	// it('Fails when tag is not string or number', () => {
	// 	const result = expect(op.getContactsWithTag(['someerror'])).toThrow();
	// })

});
