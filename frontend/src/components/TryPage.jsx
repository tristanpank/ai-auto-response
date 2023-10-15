import Phone from "./Phone.jsx";
import Header from "./Header.jsx"

export default function TryPage({setPage, setCounter, setToggle}) {
    return (
      <div className='h-screen bg-gradient-to-b from-zinc-950 to-zinc-900'>
        <Header setPage={setPage} setCounter={setCounter} setToggle={setToggle}/>
        <div className='font-medium h-[64vh] w-[36vh]'>
          <Phone/>
        </div>
      </div>
    )
}