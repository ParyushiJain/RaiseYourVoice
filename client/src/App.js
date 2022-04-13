import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { BrowserRouter } from "react-router-dom";
import AuthProvider, { useAuth } from './Contexts/authContext';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>

      <div className="App font-sans">
      <Main />
     </div>
  
    </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
