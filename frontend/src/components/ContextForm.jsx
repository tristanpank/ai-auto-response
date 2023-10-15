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
    <div style={{height: "120px"}}>
      <form className="text-xl flex flex-col justify-center items-center gap-3 mt-5" onSubmit={handleSubmit}>
        <div className="flex gap-5">
          <label className="text-white">Why are you busy?</label>
          <input type="text" className="rounded p-1" value={reason} onChange={(e) => setReason(e.target.value)} placeholder={sampleReason}></input>
        </div>
        <div className="flex gap-5">
          <label className="text-white">How long are you busy?</label>
          <input type="text" className="rounded p-1" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder={sampleDuration}></input>
        </div>
        <button type="submit" onSubmit={handleSubmit} className="text-white hover:text-blue-500 transition duration-300">Change Context</button>
      </form>
      {showSuccessMessage && (
        <div className="text-xl text-green-500 flex justify-center mt-5">
          Context Set Successfully!
        </div>
      )}
    </div>
  )
}