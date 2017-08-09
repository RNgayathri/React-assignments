import{
    ACTION_LOGIN_REQUEST,
} from './Login.constants'

export const login = (username, password) => {
    return ({
        type: ACTION_LOGIN_REQUEST,
        payload: {username, password}
    });
};