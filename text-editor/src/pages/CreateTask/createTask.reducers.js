import {createReducerFromObject} from '../../utils/reducerUtils';
import {fromJS} from 'immutable';
import {
    ACTION_GET_DESCRIPTION
} from './createTask.constants';
export const initialState = fromJS({
    task:{id:0,description:"",title:""}
});

export const setDescriptionState= (state,payload) => {
    state = state.set('task', fromJS(payload));
    return state;
};

const reducerFunctions = {
    [ACTION_GET_DESCRIPTION] : setDescriptionState
};

const createTaskReducer = createReducerFromObject(reducerFunctions,initialState);
export default createTaskReducer;