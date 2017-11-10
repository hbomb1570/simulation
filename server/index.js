require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive'),
      controller = require('./controller/controller');

const app = express()
app.use(bodyParser.json())
app.use(cors())

massive(process.env.connection_string).then( db => {
    app.set('db', db)
})

app.get('/api/shelf/:id', controller.readShelf)

app.get('/api/bin/:id', controller.readBin)

app.put('/api/bin/:id', controller.update)

app.delete('/api/bin/:id', controller.delete)

app.post('/api/bin/:id', controller.create)




const port = 3000

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})