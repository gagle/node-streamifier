streamifier
===========

_Node.js project_

#### Converts a Buffer/String to a readable stream ####

Version: 0.0.2

#### Installation ####

```
npm install streamifier
```

#### Functions ####

- [_module_.createReadStream(buffer[, options]) : Readable](#createReadStream)

---

<a name="createReadStream"></a>
___module_.createReadStream(buffer[, options]) : Readable__  
Returns a Readable stream.

The `buffer` parameter can be a String or a Buffer.  
The `options` are the same as the [Readable](http://nodejs.org/api/stream.html#stream_class_stream_readable) stream.