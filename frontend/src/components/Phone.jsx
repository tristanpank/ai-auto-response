import { useState, useRef, useEffect } from "react";
import pfp from '../pfp.png';
import Input from './Input';
import typing from '../typing.gif';

export default function Phone({context, setContext}) {
    const [messages, setMessages] = useState([]);
    const [thinking, setThinking] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
      }, [messages]);
    
    function classOf(index) {
        if (index % 2 == 1) {
            return 'bg-gray-200 w-max max-w-3/4 ml-5 rounded-2xl text-left p-2 my-5 break-words'
        } else {
            return 'text-white bg-blue-500 w-max max-w-3/4 ml-auto mr-5 content-end rounded-2xl text-left p-2 my-5 break-words'
        }
    }


    return (
        <div className = 'bg-white border border-gray-400 rounded-3xl h-full'>
            
            <div className='bg-gray-200 rounded-t-3xl h-1/6 border-b border-gray-300 p-1.5'> 
                <img src={pfp} alt='Profile Picture' className='h-1/2 m-auto mt-[3%]'></img>
                <div className='lg:mt-3 text-center'> You </div>
            </div>
        <div className='bg-white w-[99%] h-4/6 scroll-smooth focus:scroll-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full'  >
                {   
                    messages.map((message, index) => (
                        <div className={classOf(index)}>{message}</div>
                    ))
                }
                {
                    thinking && <img src={typing} className='m-3 h-[50px]'></img>
                }
                <div ref={messagesEndRef} />
            </div>
            <Input messages={messages} setMessages={setMessages} setThinking={setThinking} context={context} setContext={setContext} />
        </div>
    )
}