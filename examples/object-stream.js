"use strict";

var stream = require ("stream");
var util = require ("util");
var streamifier = require ("../lib");

/*
Since a readable stream in object mode cannot be piped to a writable stream
because it only accepts Buffers or strings, the object must be stringified using
a Transform stream.
*/

var JSONStringifier = function (){
  stream.Transform.call (this, { objectMode: true });
};

util.inherits (JSONStringifier, stream.Transform);

JSONStringifier.prototype._transform = function (obj, encoding, cb){
  this.push (JSON.stringify (obj));
  cb ();
};

//Try passing any data type except a Buffer or a string
//The object mode is automatically set, so no options are needed
streamifier.createReadStream ({ a: 1, b: 2 })
    .pipe (new JSONStringifier ())
    .pipe (process.stdout);
//{"a":1,"b":2}