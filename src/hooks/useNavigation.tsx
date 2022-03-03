import React, { createContext, ReactNode, useState, useContext } from 'react';
import { Movie } from '../utils/movies';

interface Props {
    children: ReactNode;
}
interface INavigationContext {
    data: Movie;
    setData: (data: Movie) => void;
}

export const NavigationContext = createContext({} as INavigationContext);

function NavigationProvider({ children }: Props) {
    const [data, setData] = useState({} as Movie);

    return (
        <NavigationContext.Provider
            value={{
                data,
                setData
            }}
        >
            {children}
        </NavigationContext.Provider>
    );
}

function useNavigation() {
    const context = useContext(NavigationContext);
    return context;
}

export { NavigationProvider, useNavigation };
