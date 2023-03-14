const baseUrl = 'http://localhost:5078'
export const client = {
    get: async (apiRoute) => {
        const httpResponse = await fetch(`${baseUrl}${apiRoute}`);
        const jsonResponse = await httpResponse.json();
        return jsonResponse;
    }
}