import 'whatwg-fetch';
import {store} from '../index';

export default function request(url, options, callback, tokenRequired = true) {
    if ((tokenRequired && localStorage.getItem('token')) || !tokenRequired) {
        if (options.body)
            options.body = typeof options.body !== "string" ? JSON.stringify(options.body) : options.body;
        const defaultHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        options.headers = options.headers ? Object.assign({}, defaultHeaders, options.headers) : defaultHeaders;
        let statusCode, responseStatus, responseStatusCode;
        return fetch(url, {
            credentials: 'same-origin',
            ...options
        })
            .then(checkStatus)
            .then(response => {
                statusCode = response.status;
                responseStatus = statusCode >= 200 && statusCode < 300 ? "onSuccess" : "onError";
                responseStatusCode = statusCode.toString();
                return response.json()
            })
            .then(resp => {
                if (responseStatus in callback) {
                    callback[responseStatus](resp);
                }
                if (responseStatusCode in GLOBAL_RESPONSE_STATUS_CODE_HANDLERS) {
                    GLOBAL_RESPONSE_STATUS_CODE_HANDLERS[responseStatusCode](resp);
                }
                //Custom handling for each specific response status code is done based on whether
                //the specific response code keys are present in the callback object or not.
                if (responseStatusCode in callback) {
                    callback[responseStatusCode](resp);
                }
                return resp;
            });
    }
}
/**
 * For 502 we will not get JSON response, hence throw error
 * @param response
 * @returns {*}
 */
function checkStatus(response) {
    if (response.status !== 503) {
        return response;
    }
    store.dispatch(decrementLoaderCount());
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}