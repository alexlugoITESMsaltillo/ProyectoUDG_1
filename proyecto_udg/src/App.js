import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <Login></Login>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
