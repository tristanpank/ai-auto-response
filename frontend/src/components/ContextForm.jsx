import { useState, useEffect } from "react";
import { adjustParameters } from "../gpt-api/gptapi";

export default function ContextForm({context, setContext}) {
  const [reason, setReason] = useState("");
  const [duration, setDuration] = useState("");
  const [sampleReason, setSampleReason] = useState("In a meeting");
  const [sampleDuration, setSampleDuration] = useState("2 hours")
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    setContext(adjustParameters(reason, duration, context));
    setSampleReason(reason);
    setSampleDuration(duration);
    setReason("");
    setDuration("");
    setShowSuccessMessage(true);
  }

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000)
      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage])

  return (
    <div className='lg:h-[120px]'>
      <form className="h-[25vh] lg:h-[20vh] mx-[5vw] text-sm lg:mx-0 lg:text-xl flex flex-col justify-center items-center gap-3 mt-0 lg:mt-5" onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <label className="text-white w-[40vw] lg:w-auto">Why are you busy?</label>
          <input type="text" className="h-[5vh] lvg:h-auto rounded p-1 w-[40vw] lg:w-auto" value={reason} onChange={(e) => setReason(e.target.value)} placeholder={sampleReason}></input>
        </div>
        <div className="flex gap-3">
          <label className="text-white w-[40vw] lg:w-auto">How long are you busy?</label>
          <input type="text" className="h-[5vh] lg:h-auto rounded p-1 w-[40vw] lg:w-auto" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder={sampleDuration}></input>
        </div>
        <button type="submit" onSubmit={handleSubmit} className="text-white hover:text-blue-500 transition duration-300">Change Context</button>
      </form>
      {showSuccessMessage && (
        <div className="text-xl text-green-500 flex justify-center mt-0 lg:mt-5 pb-5 lg:pb-0">
          Context Set Successfully!
        </div>
      )}
    </div>
  )
}