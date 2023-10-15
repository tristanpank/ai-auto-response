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
    <form className="flex justify-center items-center" onSubmit={handleSubmit}>
      <label className="text-white">Why are you busy?</label>
      <input type="text" onChange={(e) => setReason(e.target.value)} placeholder="At a Doctor's Appointment"></input>
      <label className="text-white">How long are you busy?</label>
      <input type="text" onChange={(e) => setDuration(e.target.value)} placeholder="2 hours"></input>
      <button type="submit" onSubmit={handleSubmit} className="text-white">Change Context</button>
    </form>
  )
}