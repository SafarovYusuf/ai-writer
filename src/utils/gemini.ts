import { GoogleGenAI } from '@google/genai';

// Instansiya bir marta modul yuklanganda yaratiladi
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const gemini = new GoogleGenAI({ apiKey: apiKey || '' });

export const generateArticle = async (
  title: string,
  description: string
): Promise<string | undefined> => {
  if (!apiKey) {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(`
          An h1 header
            ============

            Paragraphs are separated by a blank line.

            2nd paragraph. *Italic*, **bold**, and monospace. Itemized lists
            look like:

              * this one
              * that one
              * the other one

            Note that --- not considering the asterisk --- the actual text
            content starts at 4-columns in.

            > Block quotes are
            > written like so.
            >
            > They can span multiple paragraphs,
            > if you like.

            Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
            in chapters 12--14"). Three dots ... will be converted to an ellipsis.
            Unicode is supported.
          `);
      }, 2000);
    });
  }

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
