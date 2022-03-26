import {useContext, createContext, useState, useCallback} from 'react';
import { ILanguageContextData} from "./ILanguageContextData";

const LanguageContext = createContext({} as ILanguageContextData);

export const useLanguageContext = () => {
    return useContext(LanguageContext);
};

export const LanguageProvider: React.FC = ( {children} ) => {

    const [language, setLanguage] = useState<'pt-br' | 'en-us'>('pt-br');

    const toggleLanguage = useCallback( (e) => {
        setLanguage(e.target.value);
    }, []);

    return (
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};