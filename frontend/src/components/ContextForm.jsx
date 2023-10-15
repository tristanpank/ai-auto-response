import { useState } from "react";
import { adjustParameters } from "../gpt-api/gptapi";

export default function ContextForm({context, setContext}) {
  const [reason, setReason] = useState("At a Doctor's Appointment");
  const [duration, setDuration] = useState("2 hours");

  function handleSubmit(e) {
    e.preventDefault();
    setContext(adjustParameters(reason, duration, context));
  }

  return (
    <form className="flex flex-col justify-center items-center gap-3 mt-5" onSubmit={handleSubmit}>
      <div className="flex gap-5">
        <label className="text-white">Why are you busy?</label>
        <input type="text" onChange={(e) => setReason(e.target.value)} placeholder="At a Doctor's Appointment"></input>
      </div>
      <div className="flex gap-5">
        <label className="text-white">How long are you busy?</label>
        <input type="text" onChange={(e) => setDuration(e.target.value)} placeholder="2 hours"></input>
      </div>
      <button type="submit" onSubmit={handleSubmit} className="text-white">Change Context</button>
    </form>
  )
}