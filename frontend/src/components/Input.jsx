import { useState } from "react";
import queryAPI from "../gpt-api/gptapi";
import send from '../send.png'

export default function Input({messages, setMessages, setThinking}) {
  const [input, setInput] = useState("");
  const [context, setContext] = useState([]);
  
  
  async function handleSubmit(e) {
    e.preventDefault();
    let message = {
      "role": "user",
      "content": input,
    };
    setThinking(true);
    //TODO enable context
    const res = await queryAPI(message, []);
    setContext(res);
    setThinking(false);
    setMessages([...messages, input, res[res.length-1].content]);
    console.log(res);
  }

  function handleSend(e) {
    e.preventDefault();
    if (messages.length % 2 == 0) {
      setMessages([...messages, input]);
      setInput('');
      handleSubmit(e);
    }
    
  }
  
  return(
    <div className='h-1/6 flex'>
      <form className='bg-white h-[90%] border border-gray-300 m-b-[2%] mx-2 rounded-3xl flex-1' onSubmit={handleSend}>
      <textarea name="messageContent" rows="14" cols="10" wrap="soft" maxlength="400" className='bg-white resize-none h-[99%] w-[90%] p-3 align-to outline-none rounded-3xl break-words align-text-top scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full' placeholder='Text yourself!' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => {
        if (e.key == 'Enter') {
          handleSend(e);
        }
      }}></textarea>
        
      </form>
      <button className='w-1/6' type="submit" onClick={handleSend}>
        <img className='h-1/4 mr-3 mb-[100%]' src={send}></img>
      </button>
    </div>
    
  )
}