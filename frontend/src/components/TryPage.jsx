import Phone from "./Phone.jsx";
import Header from "./Header.jsx"

export default function TryPage({setPage}) {
    return (
      <div>
        <Header setPage={setPage}/>
        <div className='h-[64vh] w-[36vh]'>
          <Phone/>
        </div>
      </div>
    )
}