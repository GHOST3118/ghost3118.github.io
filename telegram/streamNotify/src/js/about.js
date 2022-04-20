var tag = document.body.getElementsByTagName('h1')[0]
var tag2 = document.body.getElementsByTagName('h2')[0]

tag.innerText = window.Telegram.WebApp.WebAppUser.first_name || 'NoName'
tag.innerText = window.Telegram.WebApp.WebAppUser.last_name || ''

window.Telegram.WebApp.ready()
