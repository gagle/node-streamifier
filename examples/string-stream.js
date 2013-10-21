"use strict";

var streamifier = require ("../lib");

streamifier.createReadStream ("abc").pipe (process.stdout);
//abc