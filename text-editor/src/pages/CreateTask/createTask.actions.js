import {
    ACTION_GET_DESCRIPTION
} from './createTask.constants';

export const SendId = (id,description,title) => {
    return({
        type: ACTION_GET_DESCRIPTION,
        payload: {id,description,title}
    })
};
