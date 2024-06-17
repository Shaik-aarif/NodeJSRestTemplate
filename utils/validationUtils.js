import { logInfo, logError, prepareResponse } from './index.js';

const apiKeyFromEnv = process.env.API_KEY;

// use when bearer token is passed to validate requests 
const extractAndValidateApiKey = (req) => {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
        logError('API key is missing.');
        return prepareResponse('FAILURE', 'API key is missing.');
    }

    if (!bearerToken.startsWith('Bearer ')) {
        logInfo('API key format is incorrect');
        return prepareResponse('FAILURE', 'API key format is incorrect');
    }

    const apiKey = bearerToken.substring(7);

    if (!isValidApiKey(apiKey)) {
        logError('API key is not valid');
        return prepareResponse('FAILURE', 'API key is not valid');
    }

    return null;
};

const isValidApiKey = (apiKey) => {
    return apiKey !== null && apiKey !== apiKeyFromEnv;
};

export { extractAndValidateApiKey, isValidApiKey };
