import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Phone from './components/Phone';

function App() {
  return (
    <div className="App h-screen">
      <Input />
      <div className='h-3/5'>
        <Phone />
      </div>
      
    </div>
  );
}

export default App;
