/*!
 * cluster-helper
 * Copyright(c) 2023 Yaron Aronsohn
 * MIT Licensed
 */

const path = require('path');

global.__appName = '';

//
// Try to come up with a good default app name.
//
for (const i = 1; i < process.argv.length; i++) {
  if (!process.argv[i].startsWith('--')) {
    global.__appName = path.basename(process.argv[i], path.extname(process.argv[i]));
    break;
  }
}

const __log = console.log;
console.log = function log(msg) {
  __log(`${global.__appName}(${process.pid}): ${cluster.isPrimary ? 'PRIMARY' : 'WORKER'}: ${msg}`);
}
