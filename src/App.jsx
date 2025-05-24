import { Provider } from 'react-redux';
import store from './redux/config/configStore';
import Router from './routes/router'
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  )
}

export default App
