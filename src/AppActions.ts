import { action } from "mobx";
import AppStore from "./AppStore"

export const AppActions = {
    setAuthToken: action((token: string): void => {
        AppStore.authToken = token;
    }),
}

export default AppActions;