import type { TContentCreateRequestParam } from '@/shared/types/content-create-request-param';
import {
  useContext,
  type FC,
  type ReactNode,
  useState,
  createContext,
} from 'react';
import { toast } from 'react-hot-toast';
import { generateArticle } from '@/utils/gemini';

interface IContentContext {
  generatingContext: boolean;
  setGeneratingContext: (value: boolean) => void;
  generateContent: (
    param: TContentCreateRequestParam
  ) => Promise<string | null>;
}

export const ContentContext = createContext<IContentContext | null>(null);

const useContentContext = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('Content context must be used within a ContentProvider');
  }
  return context;
};

interface IProps {
  children: ReactNode;
}

const ContentContextProvider: FC<IProps> = ({ children }) => {
  const [generatingContext, setGeneratingContext] = useState(false);

  const generateContent = async (
    params: TContentCreateRequestParam
  ): Promise<string | null> => {
    let content: string | null = null;
    setGeneratingContext(true);
    const { title, description } = params;
    try {
      content = (await generateArticle(title, description)) ?? null;
    } catch (error) {
      console.log(error);
      toast.error('Error occurred while generating content');
    } finally {
      setGeneratingContext(false);
    }
    return content;
  };

  return (
    <ContentContext.Provider
      value={{
        generatingContext,
        setGeneratingContext,
        generateContent,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export { ContentContextProvider, useContentContext };
