# Ontraport Nodejs

This is the unofficial sdk for Ontraport's API on Nodejs.

![Build Status](https://travis-ci.com/Cabemo/op.svg?branch=master)

## Installation

```bash
yarn add @cabemo/op
```

## Usage

```javascript
const { Ontraport }  = require('op');

const appId = 'your-AppId';
const apiKey = 'your-ApiKey';

const op = new Ontraport(appId, apiKey);

(async () => {
  // Search for tags based on a substring
  const someTags = await searchTags('Some-substring-of-a-tag')

  // Tag a contact with a tag
  await tagContact('some@gmail.com', 23)

  // Get contacts with a specific tag
  const someContactsWithATag = await getContactsWithTag(23, select = 'email')
})();

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
