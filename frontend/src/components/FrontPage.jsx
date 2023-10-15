import { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
import chevron from '../chevron.png';
import Phone from './Phone.jsx';
import setPage from '../App.js';
import Header from "./Header.jsx"

// Hello?
// Are you there?
// What if AI responded for you?

// BG class: className="w-screen h-screen bg-zinc-950"


function Quote() {
  return (
      <div className="text-slate-100 text-7xl font-medium text-center">
        What if AI could respond for you?
        <img className='m-auto mt-[40vh] h-10 animate-bounce'src={chevron}></img>
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
    <div id="mainPage" className={`h-[200vh] bg-gradient-to-b from-zinc-950 to-zinc-800 transition-opacity ease-in duration-700 ${faded ? 'opacity-100' : 'opacity-0'} snap-y`}>
      <Header setPage={setPage}/>
      <div className="h-[100vh] pt-[40vh] snap-center">
        <Quote/>
      </div>
    </div>
  )
}


export default function FrontPage({setPage, setFirst, first, isVisible}) {

  return (
    <div className="bg-gradient-to-b from-zinc-950 to-zinc-800 h-[100vh]">
      {!isVisible && (
        <MainPage setPage={setPage} />
      )}
      {isVisible && first && (
        <div className="bg-gradient-to-b from-zinc-950 to-zinc-800 text-slate-100 text-8xl grid place-items-center h-screen">
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
