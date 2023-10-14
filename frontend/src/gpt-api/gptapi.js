import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_API_KEY,
  dangerouslyAllowBrowser: true,
});

// const chatCompletion = await openai.chat.completions.create({
//   messages: [{role: "user", content: "Say hello world"}],
//   model: "gpt-3.5-turbo",
// });

// console.log(chatCompletion);


async function queryAPI(message, context) {
  try {
    console.log("test");
    console.log(message);
    console.log([...context, message]);
    const chatCompletion = await openai.chat.completions.create({
      messages: [...context, message],
      model: "gpt-3.5-turbo",
    });
    const resMessage = chatCompletion.choices[0].message;
    console.log(chatCompletion);
    return resMessage;
  } catch(err) {
    console.log(err);
    return "Error";
  }
}

export default queryAPI;
