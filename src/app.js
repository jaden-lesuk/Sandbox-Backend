const express = require('express')
const bodyParser = require('body-parser')

const register = require('./api/register')

const app = express()

const port = 3000

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api', register)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))