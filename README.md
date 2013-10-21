streamifier
===========

_Node.js project_

#### Converts any data type to a Readable stream ####

Version: 0.1.0

#### Installation ####

```
npm install streamifier
```

#### Functions ####

- [_module_.createReadStream(object[, options]) : Readable](#createReadStream)

---

<a name="createReadStream"></a>
___module_.createReadStream(object[, options]) : Readable__

Returns a Readable stream.

The `object` can be of any data type. If it is a Buffer or string the `options` that can be passed are [`highWaterMark` and `encoding`](http://nodejs.org/api/stream.html#stream_new_stream_readable_options), otherwise the Readable stream is automatically set in [object mode](http://nodejs.org/api/stream.html#stream_object_mode) and the `options` parameter is ignored.