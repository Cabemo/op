# Ontraport Nodejs

This is the unofficial sdk for Ontraport's API on Nodejs.

## Installation

```bash
yarn add @cabemo/op
```

## Usage

```node
const { Ontraport }  = require('op');

const appId = <your-AppId>;
const apiKey = <your-ApiKey>;

const op = new Ontraport(appId, apiKey);

(async () => {
	const contactsWithTag = await op.getContactsWithTag('My-Awesome-Tag');
})();

```
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
