import Phone from "./Phone.jsx";
import Header from "./Header.jsx"

export default function TryPage({setPage, setCounter, setToggle}) {
    return (
      <div className='h-screen bg-gradient-to-b from-zinc-950 to-zinc-900'>
        <Header setPage={setPage} setCounter={setCounter} setToggle={setToggle}/>
        <div className="mt-[5%] text-slate-100 text-5xl font-medium text-center">Text yourself, and watch your personal assistant respond for you.</div>
        <div className='font-medium h-[64vh] w-[36vh] ml-[10%] mt-[5%]'>
          <Phone/>
        </div>
      </div>
    )
}