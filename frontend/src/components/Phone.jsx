import { useState } from "react";

export default function Phone() {
    const messages = ['hello ai', 'wasdf asduifhasd  sdfuihsd sdfiush sdiufh ss up?', "nm, hbu?", 'whats drsfhdfgup?', "nm, hsfdsdfdfbsdfgsdg ssdfgsdfgsdfgdfgs dsdfgsdfgsdfggsdfgs dfgsbu?", 'whats up?', "nm, hbu?", 'whats up?', "nm, hbu?", 'whats up?', "nm, hbu?", 'whats up?', "nm, hbu?", 'whats up?', "nm, hbu?", 'whats up?', "nm, hbu?", 'whats up?', "nm, hbu?", 'whats up?', "nm, hbu?", 'whatasdfnbm asdf asdf asdf 3erg serg g reg rger ger ge rg erge rger g er g erg  erg erg erg qareg sadfg sdfg sdfg s up?', "nm, hbu?", 'whats up?', "nm, hbu?", 'whats up?', "nm, hbu?", 'whats up?', "nm, hbu?", 'whats up?', "nm, hbu?"]
    function classOf(index) {
        if (index % 2 == 0) {
            return 'bg-slate-100 w-max max-w-3/4 ml-5 rounded-xl text-left p-2 my-2 break-normal'
        } else {
            return 'bg-blue-500 w-max max-w-3/4 ml-auto mr-5 content-end rounded-xl text-left p-2 my-2 break-normal'
        }
    }
    return (
        <div className = 'border border-slate-400 rounded-3xl h-100 h-full aspect-phone'>
            <div className='bg-slate-100 rounded-t-3xl h-20 border-b border-slate-300'> hel</div>
            <div className='bg-white h-4/6 scroll-smooth focus:scroll-auto overflow-y-scroll' >
            {messages.map((message, index) => (
                <div className={classOf(index)}>{message}</div>
            ))}
            
            </div>

        </div>
    )
}