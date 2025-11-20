import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateAssistantResponse = async (prompt: string, context?: string) => {
  if (!apiKey) {
    return "API Key is missing. Please configure process.env.API_KEY.";
  }

  const fullPrompt = `
    You are an intelligent assistant for an Education Center management system named "Dong Tien Education".
    Your tone should be professional, helpful, and encouraging.
    
    Context about the current page or data:
    ${context || 'No specific context provided.'}

    User Query: ${prompt}

    Please provide a concise answer. If the user asks for data analysis, act as a data analyst.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request.";
  }
};
