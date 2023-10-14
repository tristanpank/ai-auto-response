import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_API_KEY,
});

const chatCompletion = await openai.chat.completions.create({
  messages: [{role: "user", content: "Say hello world"}],
  model: "gpt-3.5-turbo",
});

console.log(chatCompletion);


async function queryAPI(message, context) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [context, message],
    model: "gpt-3.5-turbo",
  });
  return chatCompletion;
}