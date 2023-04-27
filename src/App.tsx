
import Logo from '/logo.svg'
import './App.css'
import { TelegramIcon} from 'react-share'

function App() {

  return (
    <>
      <div>
          <img src={Logo} className="logo"/>
          <div>
            <h1 style={{fontFamily: "monospace"}}>Скоро.</h1>
          </div>
          <div className='btn'>
            <button className='tg' onClick={() => window.open("https://theunboard.t.me/")}>
              <TelegramIcon size={32}></TelegramIcon>
              The Unboard
            </button>
          </div>
      </div>
    </>
  )
}

export default App
