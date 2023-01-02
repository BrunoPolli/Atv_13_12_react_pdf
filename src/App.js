import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Trabalhos from './components/Trabalhos/Trabalhos';
import ReadPDF from './components/ReadPDF/ReadPDF';

import './index.css';

function App() {
  return (
  <Router>
      
    <div>
      <Header/>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trabalhos' element={<Trabalhos/>}/>
        <Route path='/read' element={<ReadPDF/>}/>
      </Routes>    
        
    </div>
    
    </Router>
  );
}

export default App;
