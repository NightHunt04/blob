import { createContext, useContext } from "react";

export const ModelContext = createContext({
    lightTheme : false,
    toggleLightTheme : () => {},
    displayName : '',
    writeDisplayName : () => {},
    userUUID : '',
    writeUserUUID : () => {},
})

export function useModelContext() {
    return useContext(ModelContext)
}

export const ModelProvider = ModelContext.Provider