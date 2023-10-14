import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Phone from './components/Phone';
import FrontPage from './components/FrontPage';
import TryPage from './components/TryPage';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('FrontPage');

  if (page == 'FrontPage') {
    return (<FrontPage setPage={setPage}/>);
  } else if (page == 'TryPage') {
    return (<TryPage/>);
  }
    
}

export default App;
