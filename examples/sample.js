"use strict";

var streamifier = require ("../lib");

streamifier.createReadStream (new Buffer ("abc")).pipe (process.stdout);
//abc

streamifier.createReadStream ("def").pipe (process.stdout);
//def