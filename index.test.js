const { Ontraport } = require('./index');

const op = new Ontraport(process.env.ONTRAPORT_APP_ID, process.env.ONTRAPORT_API_KEY);

test('Searches tag IDs', () => {
	op.searchTagIds('someTag')
		.then(result => {
			expect(result).arrayContaining([]);
		});
});
