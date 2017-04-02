# uuid4

A Node.js module for generating and validation V4 UUIDs

## Install

```bash
$ npm install uuid4
```

## Usage

```javascript
var uuid = require('uuid4');

// Generate a new UUID
var id = uuid();

// Validate a UUID as proper V4 format
uuid.valid(id);  // true

// Generate a new UUID Asyncronously
uuid(function(err, id){
  //if (err) ...;

  //verify id
  uuid.valid(id);
});
```
