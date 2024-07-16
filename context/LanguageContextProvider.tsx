'use client';

import { ReactNode, useState } from "react";
import LanguageContext, { LanguageContextType } from "./LanguageContext";


interface LanguageContextProviderProps {
  children: ReactNode;
}

const LanguageContextProvider = ({ children }: LanguageContextProviderProps) => {
  const [language, setLanguage] = useState('en-us');

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
  };


  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;