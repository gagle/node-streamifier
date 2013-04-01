streamifier
===========

_Node.js project_

#### Converts raw data to a readable stream ####

Version: 0.0.1

There are times when you have a buffer or a string but you need to pipe it to a writable stream. You could write it to a temporary file and create a readable stream tat reads from it or you could simply convert the buffer or string to a readable stream.

#### Example ####

```javascript
var ss = require ("streamifier");

ss.createStringStream (new Buffer ("my string", "utf8")).pipe (process.stdout);
//Prints: my string

ss.createStringStream ("my string").pipe (process.stdout);
//Prints: my string
```