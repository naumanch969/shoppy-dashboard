import React, { createContext, useContext, useState, ReactNode } from "react";

interface State {
    chat: boolean;
    cart: boolean;
    userProfile: boolean;
    notification: boolean;
}

interface ContextValue {
    handleClick: (clicked: keyof State) => void;
    setMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setColor: (color: string) => void;
    isClicked: State;
    setIsClicked: any
    activeMenu: boolean,
    setActiveMenu: any
    screenSize: number;
    setScreenSize: any
    currentColor: string;
    setCurrentColor: any
    currentMode: string;
    setCurrentMode: any
    themeSettings: boolean;
    setThemeSettings: any
}

const initialState: State = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

const StateContext = createContext<ContextValue | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState<boolean>(true);
    const [isClicked, setIsClicked] = useState<State>(initialState);
    const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
    const [currentColor, setCurrentColor] = useState<string>('#03C9D7');
    const [currentMode, setCurrentMode] = useState<string>('Light');
    const [themeSettings, setThemeSettings] = useState<boolean>(false);

    const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    };

    const setColor = (color: string) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    };

    const handleClick = (clicked: keyof State) => {
        setIsClicked({ ...initialState, [clicked]: true });
    };

    const value: ContextValue = {
        handleClick,
        setMode,
        setColor,
        isClicked,
        setIsClicked,
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        themeSettings,
        setThemeSettings
    };

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => {
    const context = useContext(StateContext);
    if (context === undefined) {
        throw new Error("useStateContext must be used within a ContextProvider");
    }
    return context;
};
