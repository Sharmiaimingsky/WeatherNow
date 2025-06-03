
import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_API_KEY });



export async function getPoemOrQuote(description, city) {
  try {
    const response = await genAI.models.generateContent({
        model: "gemini-2.0-flash",
        contents: "Write a poem about " + city + " in weather " + description,
        config: {
          maxOutputTokens: 100,
        },
      });
    
   
    console.log('Response from Gemini:', response);
    return response.text;
  } catch (err) {
    console.error('Frontend error calling backend:', err);
    return 'Could not fetch poem or quote at the moment.';
  }
}