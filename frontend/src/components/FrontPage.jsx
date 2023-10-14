import { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';

// Hello?
// Are you there?
// What if AI responded for you?

// BG class: className="w-screen h-screen bg-zinc-950"


function Header() {
  const headerClass = "m-5 hover:text-blue-500 transition duration-300"
  return(
    <div className="text-slate-100 text-2xl font-medium flex flex-row justify-center">
      <button className={headerClass}>Home</button>
      <button className={headerClass}>Placeholder</button>
      <button className={headerClass}>Placeholder</button>
    </div>
  )
}


function Quote() {
  return (
    <div>
      <div className="text-slate-100 text-7xl font-medium flex flex-row justify-center">
        What if AI could respond for you?
      </div>
    </div>
  )
}


function MainPage() {
  const [faded, setFaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFaded(true);
    }, 10)
  })

  return (
    <div id="mainPage" className={`h-screen transition-opacity ease-in duration-700 ${faded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <div className="h-5/6 grid place-items-center">
        <Quote />
      </div>
    </div>
  )
}


export default function FrontPage() {

  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    // Set a timer to hide the div after 6 seconds
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 8000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="bg-zinc-950">
      {!isVisible && (
        <MainPage />
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
