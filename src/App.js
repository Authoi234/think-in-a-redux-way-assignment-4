import './App.css';
import Home from './Pages/Home';
import './CSS/MainStyle.css';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
