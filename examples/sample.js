"use strict";

var streamifier = require ("../lib");

streamifier.createReadStream (new Buffer ("abc", "utf8"))
		.pipe (process.stdout);
//abc

streamifier.createReadStream ("def").pipe (process.stdout);
//def