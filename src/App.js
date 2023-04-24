import logo from './logo.svg';
import './App.css';
import SideMenu from './Sidemenu/SideMenu';
import Mainframe from './mainframe/Mainframe';
import Header from './mainframe/Header';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <SideMenu />
        <Mainframe />
        </div>
    </div>
  );
}

export default App;
