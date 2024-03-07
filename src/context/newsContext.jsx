import { createContext, useContext, useState } from "react";
import axios from 'axios'

const ContextProvider = createContext();

export const UseContext = () => {
    const context = useContext(ContextProvider);
    if (!context) return "the context is undefined"
    return context;
}

export function NewsContext({ children }) {
    const [news, setNews] = useState([]);

    
    const getNewsF1 = async () => {
        const options = {
            method: 'GET',
            url: 'https://f1-latest-news.p.rapidapi.com/news/f1',
            headers: {
                'X-RapidAPI-Key': '98e843fc9emsh8f940e81fc449b3p12b35fjsn5b8cca6914a3',
                'X-RapidAPI-Host': 'f1-latest-news.p.rapidapi.com'
            }
        };
        try {
            const res = await axios.request(options);
            console.log(res.data);
            return;
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <ContextProvider.Provider value={{
            news,
            getNewsF1
        }}>
            {children}
        </ContextProvider.Provider>
    );
}
