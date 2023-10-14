import { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
import chevron from '../chevron.png';
import Phone from './Phone.jsx';
import setPage from '../App.js';

// Hello?
// Are you there?
// What if AI responded for you?

// BG class: className="w-screen h-screen bg-zinc-950"

function Header({setPage}) {
  function handleClick() {
    setPage('TryPage');
  }
  
  const headerClass = "m-5 hover:text-blue-500 transition duration-300"
  return(
    <div className="text-slate-100 text-2xl font-medium flex flex-row justify-center">
      <button>Title</button>
      <div className="grow"></div>
      <button className={headerClass} onClick={handleClick} >Placeholder</button>
    </div>
  )
}


function Quote() {
  return (
      <div className="h-full text-slate-100 text-7xl font-medium text-center">
        What if AI could respond for you?
        <img className='m-auto mt-[40vh] mb-0 h-10 animate-bounce'src={chevron}></img>
      </div>
  )
}


function MainPage({setPage}) {
  const [faded, setFaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFaded(true);
    }, 10)
  })

  return (
    <div id="mainPage" className={`transition-opacity ease-in duration-700 ${faded ? 'opacity-100' : 'opacity-0'} snap-y`}>
      <Header setPage={setPage}/>
      <div className="h-[100vh] pt-[45vh] snap-center">
        <Quote/>
      </div>
      <div className='h-[100vh] snap-center'>
      </div>
      
      
    </div>
  )
}


export default function FrontPage({setPage}) {

  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    // Set a timer to hide the div after 6 seconds
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 8000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="bg-gradient-to-b from-zinc-950 to-zinc-800 h-[200vh]">
      {!isVisible && (
        <MainPage setPage={setPage} />
      )}
      {isVisible && (
        <div className="text-slate-100 text-8xl grid place-items-center h-screen">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Hello?')
                .pauseFor(1000)
                .deleteAll()
                .start();
              typewriter.typeString('Are you there?')
                .pauseFor(1000)
                .deleteAll()
                .start();
              }}
            />
        </div>
      )}
    </div>
  )
}
