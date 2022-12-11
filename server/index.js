const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDb = require('./fakedb')

const productRoutes = require('./routes/products')

mongoose.connect(config.DB_URL)
    .then(
        () => {
            console.log('Connected!');
            const fakeDb = new FakeDb();
            fakeDb.initDb();
        })

const app = express()

app.use('/api/v1/products', productRoutes)

const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
    console.log('i am running.')
})