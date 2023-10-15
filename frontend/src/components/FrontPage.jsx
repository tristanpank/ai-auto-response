import { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
import chevron from '../chevron.png';
import FauxPhone from './FauxPhone.jsx';
import setPage from '../App.js';
import Header from "./Header.jsx"
import ToggleSwitch from "./ToggleSwitch";

// Hello?
// Are you there?
// What if AI responded for you?

// BG class: className="w-screen h-screen bg-zinc-950"


function Quote({toggle, setToggle, counter, setCounter}) {
  return (
    <div>
      <div className="text-slate-100 text-7xl font-medium text-center h-[65vh]">
        What if AI could respond for you?
        <img className='m-auto mt-[40vh] h-10 animate-bounce'src={chevron}></img>
      </div>
      <div className='h-[88vh]'>
        <div className="text-slate-100 text-7xl font-medium text-center">Your New Personal Secretary.</div>
        <div className='h-[82vh] flex'>
          <div className='h-[64vh] w-[36vh] m-auto mt-[10vh] ml-[10vw] mr-0'>
            <FauxPhone toggle={toggle} setToggle={setToggle} counter={counter} setCounter={setCounter}/>
          </div>
          <div className='h-full w-[50%] flex'>
            <div className='mt-[30%]'>
              <div className="text-slate-100 text-2xl font-medium text-center">See The Difference</div>
              <ToggleSwitch label=' ' toggle={toggle} setToggle={setToggle}/>
            </div>
            <div className='w-full mt-[10vh] text-slate-100 text-2xl font-medium text-center'>words explaining concept</div>
            
          </div>
        </div>
        
      </div>
      
    </div>
      
  )
}


function MainPage({setPage, toggle, setToggle, counter, setCounter}) {
  const [faded, setFaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFaded(true);
    }, 10)
  })

  return (
    <div id="mainPage" className={`h-[200vh] bg-gradient-to-b from-zinc-950 to-zinc-800 transition-opacity ease-in duration-700 ${faded ? 'opacity-100' : 'opacity-0'} snap-y`}>
      <Header setPage={setPage} />
      <div className="h-screen pt-[40vh] snap-center"> 
        <Quote toggle={toggle} setToggle={setToggle} counter={counter} setCounter={setCounter}/>
      </div>
    </div>
  )
}


export default function FrontPage({setPage, setFirst, first, isVisible, toggle, setToggle, counter, setCounter}) {

  return (
    <div className="bg-gradient-to-b from-zinc-950 to-zinc-900 h-[100vh]">
      {!isVisible && (
        <MainPage setPage={setPage} toggle={toggle} setToggle={setToggle} counter={counter} setCounter={setCounter}/>
      )}
      {isVisible && first && (
        <div className="bg-gradient-to-b from-zinc-950 to-zinc-900 text-slate-100 text-8xl grid place-items-center h-screen">
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
