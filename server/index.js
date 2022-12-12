const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const SampleDb = require('./sampledb')

const productRoutes = require('./routes/products')
const path = require('path')

mongoose.connect(config.DB_URL)
    .then(
        () => {
            if (process.env.NODE_ENV !== 'production') {
                const sampleDb = new SampleDb();
                //SampleDb.initDb();
            }
        })

const app = express()

app.use('/api/v1/products', productRoutes)

if (process.env.NODE_ENV === 'production') {
    const appPath = path.join(__dirname, '..', 'dist')
    app.use(express.static(appPath))
    app.get("*", function(req, res) {
        res.sendFile(path.resolve(appPath, 'index.html'))
    })
}


const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
    console.log('i am running.')
})