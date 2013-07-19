"use strict";

var util = require ("util");
var stream = require ("stream");

module.exports.createReadStream = function (buffer, options){
	return new StringStream (buffer, options);
};

var StringStream = function (buffer, options){
	stream.Readable.call (this, options);
	this._buffer = buffer;
	this._bufferLength = buffer.length;
	this._offset = 0;
};

util.inherits (StringStream, stream.Readable);

StringStream.prototype._read = function (n){
	this.push (this._buffer
			? this._buffer.slice (this._offset, this._offset + n)
			: null);
	this._offset += n;
	if (this._offset >= this._bufferLength){
		this._buffer = null;
	}
};