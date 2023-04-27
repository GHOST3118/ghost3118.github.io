import path from 'path'
import express from 'express'

const app = express()

app.use('/', express.static(path.join('./', 'dist')))
app.get('/', (req, res) => {
    res.sendFile('./dist/index.html')
})

app.listen(80)