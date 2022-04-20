import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Body from  './components/Body'

function App() {
  return (
    <div className="App">
     <Header keys={["Home","FAQ","Contact","Blog"]}/>
     <Body/>
    
    </div>
  );
}

export default App;
