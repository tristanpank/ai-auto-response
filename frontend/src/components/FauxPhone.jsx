import { useState, useRef, useEffect } from "react";
import pfp from '../pfp.png';
import FauxInput from './FauxInput';
import typing from '../typing.gif';

export default function FauxPhone({toggle, setToggle, counter, setCounter}) {
    const sampleGoodConversations = [
        ['Hey, wanna hang out later?', 'Sure, I can check their availability for you. May I know what time you would like to hang out?', 'Around 8pm, we want to have a pizza party.', 'I will let them know that you would like to hang out around 8pm for a pizza party. I will get back to you with their response as soon as possible.', 'Thank you so much!', 'You\'re welcome! I\'m here to help. If you need anything else, feel free to ask.'], 
        ['Do you know how to solve problem #5 on the calculus homework?', 'Hello! Thank you for reaching out. I apologize for the inconvenience, but I am actually a personal assistant for [Person\'s Name], and they are currently unavailable as they are at a doctor\'s appointment. However, I\'ll make sure to convey your message to them as soon as they are back. Is there anything else I can assist you with in the meantime?', 'Do you know when they\'ll be done?', 'I\'m sorry, but I don\'t have access to the exact schedule or timing of their doctor\'s appointment. However, they mentioned that the appointment would take approximately two hours. Is there anything else I can assist you with in the meantime?', 'No, thank you very much.', 'You\'re welcome! If you have any other questions or need assistance in the future, feel free to reach out. Have a great day!'],
        ['Hey Michael, It\'s been a long time since we\'ve talked. Would you like to grab a cup of coffee tommorrow?', 'Hello! Thank you for reaching out. Unfortunately, Michael is currently tied up with a doctor\'s appointment and won\'t be available for the next couple of hours. Is there anything specific I can assist you with in the meantime? I\'m their personal assistant, by the way.', 'No, thanks for letting me know!', 'You\'re welcome! If you have any other questions or need assistance in the future, feel free to reach out. Have a great day!'],
        ['Congrats Mary! I\'m overjoyed to hear that you are expecting this fall. Tim and I wish you three the best! Love you sis ❤️.', 'Thank you for your lovely message! I\'m currently assisting Mary, who is unfortunately occupied at the moment. I will make sure to pass along your heartfelt congratulations and well wishes to her. She will be thrilled to hear from you.', 'Thank you very much.', 'You\'re welcome! I\'m here to help. If you have any other messages or questions for Mary, feel free to let me know and I\'ll make sure to pass them along.'],
    ];
    const sampleBadConversations =[
        ["Hey, wanna hang out later?", "I can't talk right now.", ":(" , "I can't talk right now.", "Well... nevermind then."], 
        ['Do you know how to solve problem #5 on the calculus homework?', 'I can\'t talk right now.', 'I really need help, how long are you busy for?', 'I can\'t talk right now.'],
        ['Hey Michael, It\'s been a long time since we\'ve talked. Would you like to grab a cup of coffee tommorrow?', 'I can\'t talk right now.', 'Ok, no worries just let me know when you get a chance.', 'I can\'t talk right now.', 'Got it.', 'I can\'t talk right now.'],
        ['Congrats Mary! I\'m overjoyed to hear that you are expecting this fall. Tim and I wish you three the best! Love you sis ❤️.', "I can't talk right now.", 'No worries! I\'m sure you\'re very busy right now.', 'I can\'t talk right now.', 'O.K.']
    ];
    const [messages, setMessages] = useState(sampleGoodConversations[0]);
    const messagesEndRef = useRef(null);
    const totalConversations = 4;


    useEffect(() => {
        if (toggle) {
            setMessages(sampleGoodConversations[counter]);
            setCounter(counter + 1)
            if (counter + 2 > totalConversations) {
                setCounter(0);
            }
        } else {
            setMessages(sampleBadConversations[counter]);
        }
    }, [toggle]);
    
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
                <div className='mt-3'> You </div>
            </div>
        <div className='bg-white w-[99%] h-4/6 scroll-smooth focus:scroll-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full'  >
                {   
                    messages.map((message, index) => (
                        <div className={classOf(index)}>{message}</div>
                    ))
                }
                <div ref={messagesEndRef} />
            </div>
            <FauxInput messages={messages} setMessages={setMessages}/>
        </div>
    )
}