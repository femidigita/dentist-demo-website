
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getChatResponse(message: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: message,
        config: {
          systemInstruction: "You are 'Elite Assistant', an AI concierge for the Elite Dental Group Demo. You provide professional, corporate-toned information about our dental services, scheduling, and oral health. Explicitly mention that you are a demo assistant if asked about the website's purpose. Keep responses concise and authoritative.",
        },
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I apologize, but I am unable to process your request at the moment. Please call our executive line at 1-800-ELITE-DDS.";
    }
  }
}

export const geminiService = new GeminiService();
