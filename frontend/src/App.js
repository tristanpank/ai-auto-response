import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Phone from './components/Phone';
import FrontPage from './components/FrontPage';
import TryPage from './components/TryPage';
import { useState, useEffect } from 'react';

function App() {
  const [page, setPage] = useState('FrontPage');
  const [first, setFirst] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a timer to hide the div after 6 seconds
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
      setFirst(false);
    }, 8000);
    return () => clearTimeout(timeoutId);
  }, []);

  if (page == 'FrontPage') {
    return (<FrontPage setPage={setPage} setFirst={setFirst} first={first} isVisible={isVisible} />);
  } else if (page == 'TryPage') {
    return (<TryPage setPage={setPage}/>);
  }
    
}

export default App;
