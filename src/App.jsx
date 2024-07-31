import { Provider } from 'react-redux';
import './App.css';
import RouteProvider from './routes/routes';
import store from './redux/store';

function App() {
  return (
  <Provider store={store}>
  <RouteProvider/>
  </Provider>
  );
}

export default App;
