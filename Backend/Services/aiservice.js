import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateSuggestions = async (summary) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview"
    });

    const result = await model.generateContent(`
You are a financial advisor.

Analyze this expense data: ${summary}

Respond ONLY in JSON format like this:

{
  "analysis": "short summary",
  "tips": ["tip1", "tip2"],
  "warnings": ["warning1"],
  "actions": ["action1"],
  "savingsPotential": "low/medium/high"
}

Do NOT include markdown or extra text.
`)
    // console.log(await genAI.listModels());
   const text = result.response.text();

// remove markdown if AI adds ```json
const cleanText = text.replace(/```json|```/g, "");

let parsed;

try {
  parsed = JSON.parse(cleanText);
} catch (err) {
  parsed = { raw: cleanText };
}

return parsed;

  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
  
};

