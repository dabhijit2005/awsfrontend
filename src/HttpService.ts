import { THttpArgs } from './types';
export const httpService = {
    fetch: async ({url, options} : THttpArgs) : Promise<any> => {
        return await fetch(`http://localhost:8080${url}`, options);
}
};

export default httpService;