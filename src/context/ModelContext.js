import { createContext, useContext } from "react";

export const ModelContext = createContext({
    lightTheme : false,
    entrance : false,
    toggleEntrance : () => {},
    toggleLightTheme : () => {},
})

export function useModelContext() {
    return useContext(ModelContext)
}

export const ModelProvider = ModelContext.Provider