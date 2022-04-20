var tag = document.body.getElementsByTagName('h1')[0]
var tag2 = document.body.getElementsByTagName('h2')[0]

window.Telegram.WebApp.ready()

let params = (new URL(document.location)).searchParams; 
let data = JSON.parse(params.get('data'))

for (let i in data) {

    console.log(data[ i ])
}
