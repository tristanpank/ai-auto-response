

export default function Header({page, setPage, setCounter, setToggle}) {

    const headerClass = "m-5 hover:text-blue-500 transition duration-300"
    function handleClick () {
      if (page === "FrontPage") {
        window.location.reload(false);
      }
      setPage("FrontPage");
      setCounter(0);
      setToggle(false);
    }
    return(
      <div className="text-slate-100 text-2xl font-medium flex flex-row justify-center">
        <button className={headerClass} onClick={handleClick}>Title</button>
        <div className="grow"></div>
        <button className={headerClass} onClick={() => setPage("TryPage")} >Try it!</button>
      </div>
    )
  }