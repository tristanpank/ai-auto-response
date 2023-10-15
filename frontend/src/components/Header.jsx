import { useState, useEffect } from "react";

export default function Header({setPage}) {

    const headerClass = "m-5 hover:text-blue-500 transition duration-300"
    return(
      <div className="text-slate-100 text-2xl font-medium flex flex-row justify-center">
        <button className={headerClass} onClick={() => setPage("FrontPage")}>Title</button>
        <div className="grow"></div>
        <button className={headerClass} onClick={() => setPage("TryPage")} >Try it!</button>
      </div>
    )
  }