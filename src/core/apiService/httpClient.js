import { HTTP_METHODS } from '../constants/api';
import { DOMAIN, API_KEY, VERSION1 } from '../constants/urls';
import queryString from 'query-string'

class HttpClient {
    constructor({ domainApi, apiKey, version }) {
        this.domainApi = domainApi; 
        this.apiKey = apiKey;
        this.version = version;
    };
    
    get(url, queryData) {
        const options = {
            method: HTTP_METHODS.GET
        }
        return this.request(`${this.domainApi}/${this.version}/${url}?${queryString.stringify(queryData)}&appid=${API_KEY}&units=metric`, options)
    }

    async request(url, options) {
        const { method } = options;
        try{
            const response = await fetch(url, {
                method
            });
            return response.json();
        }catch(error) {
            return error
        }   
    
    }

};


export const httpClient = new HttpClient({
    apiKey: API_KEY,
    domainApi: DOMAIN,
    version: VERSION1
})