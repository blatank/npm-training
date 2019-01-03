'use strict';

// ライブラリ読み込み
const request = require('request');

// URL,コールバックを渡す
request('http://www.google.com', (error, response, body) => {
    console.log(body);
})