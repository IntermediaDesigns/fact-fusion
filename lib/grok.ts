// src/lib/grok.ts
import { Configuration } from 'openai';

// Initialize Grok client
export const grokConfig = new Configuration({
  apiKey: process.env.GROK_API_KEY,
  basePath: 'https://api.groq.com/v1',
});

// Types for Grok API responses
export interface GrokResponse {
  choices: {
    message: {
      content: string;
      role: string;
    };
    finish_reason: string;
  }[];
  created: number;
  model: string;
}

