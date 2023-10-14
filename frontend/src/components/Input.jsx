import { useState } from "react";
import queryAPI from "../gpt-api/gptapi";

export default function Input() {
  const [input, setInput] = useState("");
  const [context, setContext] = useState("");
  
  async function handleSubmit(e) {
    e.preventDefault();
    let message = {
      "role": "user",
      "content": input,
    };
    const res = await queryAPI(message, []);
    console.log(res);
  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)}></input>
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}