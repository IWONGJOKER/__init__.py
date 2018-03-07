// TODO parse with headers['content-type']

const body = [];
request
	.on('data', chunk => body.push(chunk))
	.on('end', () => body = Buffer.concat(body).toString());