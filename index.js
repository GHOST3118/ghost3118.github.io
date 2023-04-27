import express from "../../node_modules/express/lib/express"

const app = express()

app.use('/', express.static('dist'))
app.get('/', (req, res) => {
    res.sendFile('./dist/index.html')
})

app.listen(80)