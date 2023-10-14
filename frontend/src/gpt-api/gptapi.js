import axios from "axios";



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
