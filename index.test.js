const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const Ontraport = require('./index');

const op = new Ontraport(process.env.ONTRAPORT_APP_ID, process.env.ONTRAPORT_API_KEY);
chai.use(chaiAsPromised);
const { expect } = chai;

describe('Get contacts with tag', () => {
	it('Returns array of contacts with tag', async () => {
		const result = await op.getContactsWithTag('267');
		expect(result).to.be.instanceOf(Array);
		expect(result[0]).to.have.property('email');
	});
	it('Fails when tag is not string or number', async () => {
		await expect(op.getContactsWithTag([])).to.be.rejectedWith(Error);
	});
});

describe('Tag Contact', () => {
	it('Should add tag to contact', async () => {
		const result = await op.tagContact('eecanton@gmail.com', 267);

		expect(result).to.equal('The tag is now being processed.');
	});
	it('Fails when email is has wrong format', async () => {
		await expect(op.tagContact('eecanton', 267)).to.be.rejectedWith(Error);
	});
});
