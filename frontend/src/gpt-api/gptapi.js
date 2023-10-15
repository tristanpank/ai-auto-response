import axios from "axios";


function adjustParameters(reason, duration, context) {
let systemMessage = "You are a personal assistant for someone and are receiving text messages for them while they are busy. They are busy because of " + reason + " and will be done in " + duration + " Please answer briefly and try to help them if necessary. Return a response from the perspective of a personal secretary, keeping secret the fact that you are an AI. State something about the person being busy and about being an assistant of the person they intended to message.";
  if (context.length !== 0) {
    context[0].message = systemMessage;
  } else {
    context.push({"role": "system", "content": systemMessage});
  }
  return context;
}


async function queryAPI(message, context) {
  try {
    
    console.log(context);
    console.log(message);

    const config = {
      method: "post",
      url: "http://206.189.225.112/gpt",
      // url: "http://127.0.0.1:8000/gpt/",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      data: JSON.stringify({
        "context": context,
        "message": message
      }),
    }

    const res = await axios(config);

    console.log(res);
    const newMessage = res.data.choices[0].message;
    console.log(newMessage);

    return [...context, message, newMessage];

  } catch(err) {
    console.log(err);
    return "Error";
  }
}

export default queryAPI;
export {adjustParameters, queryAPI};
