import { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
import chevron from '../chevron.png';
import FauxPhone from './FauxPhone.jsx';
import setPage from '../App.js';
import Header from "./Header.jsx"
import ToggleSwitch from "./ToggleSwitch";


function Quote({toggle, setToggle, counter, setCounter}) {
  return (
    <div>
      <div className="text-slate-100 text-center font-medium h-[50vh] lg:h-[65vh] text-3xl lg:text-8xl">
        What if AI could respond for you?
        <img className='m-auto mt-[30vh] lg:mt-[40vh] h-10 animate-bounce'src={chevron}></img>
      </div>
      <div className='h-[88vh]'>
        <div className="text-slate-100 text-7xl font-medium text-center h-0 lg:h-fit collapse lg:visible">Meet Mia, your Mobile Intelligence Assistant.</div>
        <div className='h-[82vh] lg:flex'>
          <div className='font-medium h-[64vh] w-[36vh] mx-auto mt-[10vh] lg:ml-[10vw] lg:mr-0'>
            <FauxPhone toggle={toggle} setToggle={setToggle} counter={counter} setCounter={setCounter}/>
          </div>
          <div className='lg:h-full m-auto lg:m-0 w-[50%] flex'>
            <div className='mt-[30%]'>
              <div className="text-slate-100 text-2xl font-medium text-center">See The Difference</div>
              <ToggleSwitch label=' ' toggle={toggle} setToggle={setToggle}/>
            </div>
            <div className='flex flex-col pt-[5vh] mt-[10vh] text-slate-100 text-2xl w-0 collapse lg:w-full lg:visible font-medium text-center'>
              <div>
                Mia is our design for a new way to receive text messages while you are busy. Rather than sending others a bland text message while you’re in a meeting, at a doctor’s appointment, or even while you’re driving, Mia is there to act as your personal secretary and manage your incoming texts for you.
              </div>
              <div className="mt-5">
                Powered with the technology of OpenAi's Chat GPT-3.5 Turbo API, Mia responds to anyone trying to contact you, informing them of why you’re unavailable and when you will be able to respond.
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
      
  )
}


function MainPage({page, setPage, toggle, setToggle, counter, setCounter}) {
  const [faded, setFaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFaded(true);
    }, 10)
  })

  return (
    <div id="mainPage" className={`h-[200vh] bg-gradient-to-b from-zinc-950 to-zinc-800 transition-opacity ease-in duration-700 ${faded ? 'opacity-100' : 'opacity-0'} snap-y`}>
      <Header page={page} setPage={setPage} setCounter={setCounter} setToggle={setToggle}/>
      <div className="h-screen pt-[35vh] snap-center"> 
        <Quote toggle={toggle} setToggle={setToggle} counter={counter} setCounter={setCounter}/>
      </div>
    </div>
  )
}


export default function FrontPage({page, setPage, setFirst, first, isVisible, toggle, setToggle, counter, setCounter}) {

  return (
    <div className="bg-gradient-to-b from-zinc-950 to-zinc-900 h-screen w-full">
      {!isVisible && (
        <MainPage page={page} setPage={setPage} toggle={toggle} setToggle={setToggle} counter={counter} setCounter={setCounter}/>
      )}
      {isVisible && first && (
        <div className="bg-gradient-to-b from-zinc-950 to-zinc-900 text-slate-100 text-8xl grid place-items-center h-screen">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Hello?')
                .pauseFor(800)
                .deleteAll()
                .start();
              typewriter.typeString('Are you there?')
                .pauseFor(800)
                .deleteAll()
                .start();
              typewriter.typeString('...')
                .start();
              }
            }
          />
        </div>
      )}
    </div>
  )
}
