const https = require('https');

const data = JSON.stringify({
  contents: [{
    parts: [{
      text: "Say hello"
    }]
  }]
});

const req = https.request({
  hostname: 'generativelanguage.googleapis.com',
  port: 443,
  path: '/v1beta/models/gemini-1.5-flash:generateContent?key=invalid_key_for_testing',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-goog-api-key': 'invalid_key_for_testing',
    'User-Agent': 'Mozilla/5.0'
  }
}, (res) => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => console.log('Status:', res.statusCode, body));
});
req.write(data);
req.end();
