"use client";
import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface LanguageContextType {
  // Tipos dos dados 
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext deve ser usado dentro de um provedor authContext');
  }
  return context;
};

export default LanguageContext;