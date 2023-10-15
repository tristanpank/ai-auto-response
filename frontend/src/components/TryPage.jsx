import Phone from "./Phone.jsx";
import Header from "./Header.jsx";
import ContextForm from "./ContextForm.jsx";
import { useState } from "react";
import { adjustParameters } from "../gpt-api/gptapi.js";

export default function TryPage({setPage, setCounter, setToggle}) {
  const [context, setContext] = useState(adjustParameters("At a Doctor's Appointment", "2 hours", []));
  
  return (
      <div className='h-screen bg-gradient-to-b from-zinc-950 to-zinc-900'>
        <Header setPage={setPage} setCounter={setCounter} setToggle={setToggle}/>
        <div className="mt-[5%] text-slate-100 text-5xl font-medium text-center">Text yourself, and watch your personal assistant respond for you.</div>
        <ContextForm context={context} setContext={setContext} />
        <div className='font-medium h-[64vh] w-[36vh] ml-[10%] mt-[5%]'>
          <Phone context={context} setContext={setContext} />
        </div>
      </div>
    )
}