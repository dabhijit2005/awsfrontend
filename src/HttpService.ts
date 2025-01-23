import AppStore from './AppStore';
import { THttpArgs } from './types';
export const httpService = {
    fetch: async ({url, options} : THttpArgs) : Promise<any> => {
        console.log('fetching: ', url);
        return await fetch(`http://localhost:8080${url}`, options);
},
fetchWithAuth: async ({url, options} : THttpArgs) : Promise<any> => {
    const optionsWithAuth = {
        ...options,
        headers: {
            ...options?.headers,
            Authorization: `Bearer ${AppStore.authToken}`
        }
    };
    return await fetch(`http://localhost:8080${url}`, optionsWithAuth);
}
};

export default httpService;