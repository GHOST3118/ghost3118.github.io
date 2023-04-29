import { Group, Space } from '@mantine/core'
import { Contact } from '../widget/Features/Contact'
import { Features } from '../widget/Features/Features'
import { HeroImageBackground } from '../widget/HeroHeader'

import './css/App.css'
import { FooterSocial } from '../widget/Footer'

function App() {

  return (
    <>
      <HeroImageBackground/>

      <Space h='xs'/>
      <div id='overview'>
        <Features/>
      </div>


      <Space h='xs'/>

      <Group position='center'>
        <Contact/>
      </Group>

      <Space h='xs'/>

      <FooterSocial/>
    </>
  )
}

export default App
