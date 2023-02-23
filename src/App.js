import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import FormAuth from './pages/FormAuth';
import MainRoutes from './routes/MainRoutes';
import { store } from './store';

function App() {
  return (
    <div>
      <BrowserRouter> 
      <Provider store={store}>

         <MainRoutes/>
      </Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
