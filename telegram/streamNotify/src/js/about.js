var tag = document.body.getElementsByTagName('h1')[0]
var tag2 = document.body.getElementsByTagName('h2')[0]

window.Telegram.WebApp.ready()

tag.innerText = window.Telegram.WebApp.initDataUnsafe.user.first_name || 'NoName'
tag2.innerText = window.Telegram.WebApp.initDataUnsafe.user.last_name || ''
