import { fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const httpClient = (url, options = {}) => {
    // Ensure headers are present
    if (!options.headers) {
        options.headers = new Headers({
            Accept: 'application/json',
        });
    }
    // Add CORS headers
    const token = localStorage.getItem('token');
    if (token) {
        options.headers.set('Authorization', `Bearer ${token}`);
    }
    
    return fetchUtils.fetchJson(url, options).then(response => {
        // If the response doesn't include X-Total-Count, create a new response with the header
        if (!response.headers.get('x-total-count') && Array.isArray(response.json)) {
            const newHeaders = new Headers(response.headers);
            newHeaders.set('x-total-count', response.json.length.toString());
            
            return {
                ...response,
                headers: newHeaders,
            };
        }
        return response;
    });
};

const API_URL = 'http://localhost:3001';

// Create the data provider
const baseDataProvider = jsonServerProvider(API_URL, httpClient);

// Wrap the data provider to ensure proper pagination handling
const dataProvider = {
    ...baseDataProvider,
    getList: (resource, params) => {
        return baseDataProvider.getList(resource, params).catch(error => {
            // If the X-Total-Count error occurs, try to handle it gracefully
            if (error.message.includes('X-Total-Count')) {
                return httpClient(`${API_URL}/${resource}`).then(response => {
                    const data = response.json;
                    const total = Array.isArray(data) ? data.length : 0;
                    
                    // Handle pagination manually
                    const { page, perPage } = params.pagination;
                    const start = (page - 1) * perPage;
                    const end = start + perPage;
                    
                    return {
                        data: data.slice(start, end),
                        total: total
                    };
                });
            }
            throw error;
        });
    }
};

export default dataProvider;