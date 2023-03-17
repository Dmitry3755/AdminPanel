import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Authentification from "./components/Authentification";
import AdminPanel from "./components/AdminPanel";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StackNavigator} from 'react-navigation';

function App() {
  return (
    <div>
      <div>
        <p></p>
      </div>
      <Authentification></Authentification>
      <Footer></Footer>
    </div>
  );
}

export default App;
