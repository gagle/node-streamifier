'use strict';

const stream = require( 'stream' );

class ReadStream extends stream.Readable
{
    constructor( obj, opt = {} )
    {
        super();
        if( Buffer.isBuffer( obj ) || obj === ''+obj )
            stream.Readable.call( this, {
                highWaterMark: opt.highWaterMark, encoding: opt.encoding
            } );
        else
            stream.Readable.call( this, { objectMode: true } );
        this._object = obj;
        this.init();
    }

    init()
    {
        ReadStream.prototype._read = () => {
            this.push( this._object );
            this._object = null;
        };
    }
}

module.exports.createReadStream = ( obj, opt ) => new ReadStream( obj, opt );
