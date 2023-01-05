const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.json({ 'msg': 'hello world compose2' })
})



const port = process.env.PORT || 3000;

app.listen(port, function () {
	console.log('server started')
})
