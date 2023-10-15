import { useState } from "react";
import {queryAPI, adjustParameters} from "../gpt-api/gptapi";
import send from '../send.png'

export default function FauxInput({messages, setMessages, setThinking}) {
  return(
    <div className='h-1/6 flex'>
      <form className='bg-white h-[90%] border border-gray-300 m-b-[2%] mx-2 rounded-3xl flex-1'>
      <textarea name="messageContent" rows="14" cols="10" wrap="soft" maxlength="0" className='bg-white resize-none h-[99%] w-[90%] p-3 align-to outline-none rounded-3xl break-words align-text-top scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full' placeholder='Text Message'
      ></textarea>
        
      </form>
      <button className='w-1/6' type="submit">
        <img className='h-1/4 mr-3 mb-[100%]' src={send}></img>
      </button>
    </div>
    
  )
}