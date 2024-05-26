//Import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Main from './Components/Main';

function App() {
  return <>
    <Header/>
    <SideBar/>
    <Main />
  </>
}

export default App;
