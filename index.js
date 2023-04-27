import express from "npm:express@4.18.2"

const app = express()

app.use('/', express.static('dist'))
app.get('/', (req, res) => {
    res.sendFile('./dist/index.html')
})

app.listen(80)