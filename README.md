streamifier
===========

_Node.js project_

#### Converts a Buffer/String to a readable stream ####

Version: 0.0.1

There are times when you have a buffer/string but you need to pipe it to a writable stream. You could write it to a temporary file and create a readable stream that reads from it or you could simply convert the buffer/string to a readable stream.

#### Example ####

```javascript
var streamifier = require ("streamifier");

streamifier.createReadStream (new Buffer ("my string", "utf8")).pipe (process.stdout);
//Prints: my string

streamifier.createReadStream ("my string").pipe (process.stdout);
//Prints: my string
```