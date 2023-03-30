import './App.css'
import './assets/fonts/mainFont.css'

import { ConfigProvider } from 'antd';
import Offcut from './components/offcut';
import Intro from './components/intro';


function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'rgba(191,41,91)',
          },
        }}
      >
        <Intro />
        <Offcut />
      </ConfigProvider>
    </div>
  )
}

export default App
