var tag = document.body.getElementsByTagName('h1')[0]

tag.innerText = window.Telegram.WebApp.WebAppUser.first_name || 'null'

window.Telegram.WebApp.ready()

//tag.innerText = 'text'