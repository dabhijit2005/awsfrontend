import { TAppStore } from "./types";
import { observable } from "mobx";

export const AppStore: TAppStore = observable({
    authToken: null,
});

export default AppStore;