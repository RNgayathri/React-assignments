import {
    ACTION_FETCH_EMOJIS,
    ACTION_HANDLE_EMOJIS

} from './Emojis.constants';

export const getEmojis = () => {
    console.log("action dispatched");
    return {
        type: ACTION_FETCH_EMOJIS,
        payload:''
    }
};
export const handleemojis = (response) => {
    return {
        type: ACTION_HANDLE_EMOJIS,
        payload:response
    }
};
