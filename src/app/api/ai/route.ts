import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: groq("llama-3.1-8b-instant"),
    messages,
  });

  return result.toDataStreamResponse();
}
