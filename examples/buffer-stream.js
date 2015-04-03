'use strict';

var streamifier = require('../lib');

streamifier.createReadStream(new Buffer ([97, 98, 99])).pipe(process.stdout);
// abc