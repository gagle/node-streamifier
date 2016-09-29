'use strict';

var streamifier = require('../');

streamifier.createReadStream('abc').pipe(process.stdout);
// abc
