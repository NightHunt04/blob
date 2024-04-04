import { createContext, useContext } from "react";

export const ModelContext = createContext({
    lightTheme : false,
    toggleLightTheme : () => {},
    settings : false,
    toggleSettings : () => {},
    logoutPopUp : false,
    toggleLogoutPopUp : () => {},
})

export function useModelContext() {
    return useContext(ModelContext)
}

export const ModelProvider = ModelContext.Provider