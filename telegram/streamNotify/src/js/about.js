var tag = document.body.getElementsByTagName('h1')[0]

tag.innerText = window.Telegram.WebApp.initData || 'null'

window.Telegram.WebApp.ready()