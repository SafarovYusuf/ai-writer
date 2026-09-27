import { GoogleGenAI } from '@google/genai';

// Instansiya bir marta modul yuklanganda yaratiladi
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const gemini = new GoogleGenAI({ apiKey: apiKey || '' });

export const generateArticle = async (
  title: string,
  description: string
): Promise<string | undefined> => {
  try {
    const response = await gemini.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `You are a helpful assistant designed to assist users in creating engaging and informative articles based on the provided information.

        Please create an article based on the following information:
        Title: ${title}
        Description: ${description}

        Remember the post should be based strictly on the information mentioned above.
        Output must be in Markdown text format strictly.`,
    });

    return response.text;
  } catch (error) {
    console.error('Article generation error:', error);
    throw error;
  }
};
