import './App.css';
import Add from './componets/Add';
import Edit from './componets/Edit';
import Home from './componets/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/add' element={<Add/>}/>
        </Routes>
        </Router>
    
    </div>
  );
}

export default App;
