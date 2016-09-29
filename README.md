streamifier
===========

#### Converts a Buffer/String into a readable stream ####

[![npm][npm-image]][npm-url]

Makes a [createReadStream][0] from a [Buffer][1]

A common solution for writing a buffer to file, then creating a read stream from that file path.

Usage:
```js
const streamifier = require( 'streamifier' ).createReadStream;

streamifier( data ).pipe( process.stdout );
```

Returns a Readable stream.

The `object` can be of any data type. If it is a Buffer or a string, the available `options` are [`highWaterMark` and `encoding`][2], otherwise the Readable stream is automatically set in [object mode][3] and the `options` parameter is ignored.

[npm-image]: https://img.shields.io/npm/v/streamifier.svg?style=flat
[npm-url]: https://npmjs.org/package/streamifier
[0]: https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options
[1]: https://nodejs.org/api/buffer.html
[2]: http://nodejs.org/api/stream.html#stream_new_stream_readable_options
[3]: http://nodejs.org/api/stream.html#stream_object_mode
