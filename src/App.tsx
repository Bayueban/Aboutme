import './App.css'
import { ConfigProvider } from 'antd';
import Router from './router/router';

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'rgba(221,41,91)',
          },
        }}

      >
        <Router />
      </ConfigProvider>
    </div>
  )
}

export default App
