import {
  createContext,
  useContext,
  useState,
  type FC,
  type ReactNode,
} from 'react';

interface IAppContext {
  generatingContext: boolean;
  setGeneratingContext: (value: boolean) => void;
}

export const AppContext = createContext<IAppContext | null>(null);

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('App context must be used within a AppProvider');
  }
  return context;
};

interface IProps {
  children: ReactNode;
}

const AppContextProvider: FC<IProps> = ({ children }) => {
  const [generatingContext, setGeneratingContext] = useState(false);

  return (
    <AppContext.Provider value={{ generatingContext, setGeneratingContext }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, useAppContext };
