import Phone from "./Phone.jsx";
import Header from "./Header.jsx";
import ContextForm from "./ContextForm.jsx";
import { useState } from "react";
import { adjustParameters } from "../gpt-api/gptapi.js";

export default function TryPage({page, setPage, setCounter, setToggle}) {
  const [context, setContext] = useState(adjustParameters("At a Doctor's Appointment", "2 hours", []));
  
  return (
      <div className='h-fit min-h-screen lg:h-screen bg-gradient-to-b from-zinc-950 to-zinc-900'>
        <Header page={page} setPage={setPage} setCounter={setCounter} setToggle={setToggle}/>
        <div className="lg:mt-[4vh] text-slate-100 text-2xl lg:text-6xl font-medium text-center">Text yourself, and watch Mia respond for you.</div>
        <div className="lg:flex">
          <div className='font-medium h-[55vh] w-[30vh] m-auto lg:mr-[5vw] mt-[2vh] lg:mt-[7vh]'>
            <Phone context={context} setContext={setContext} />
          </div>
          <div className='m-auto ml-0'>
            <ContextForm context={context} setContext={setContext} />
          </div>
        </div>
        
      </div>
    )
}