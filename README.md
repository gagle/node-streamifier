streamifier
===========

#### Converts any data type to a Readable stream ####

[![NPM version](https://badge.fury.io/js/streamifier.png)](http://badge.fury.io/js/streamifier "Fury Version Badge")

[![NPM installation](https://nodei.co/npm/streamifier.png?mini=true)](https://nodei.co/npm/streamifier "NodeICO Badge")

#### Functions ####

- [_module_.createReadStream(object[, options]) : Readable](#createReadStream)

---

<a name="createReadStream"></a>
___module_.createReadStream(object[, options]) : Readable__

Returns a Readable stream.

The `object` can be of any data type. If it is a Buffer or a string, the available `options` are [`highWaterMark` and `encoding`](http://nodejs.org/api/stream.html#stream_new_stream_readable_options), otherwise the Readable stream is automatically set in [object mode](http://nodejs.org/api/stream.html#stream_object_mode) and the `options` parameter is ignored.