import {createReducerFromObject} from '../../utils/reducerUtils';
import {fromJS} from 'immutable';
import {
    ACTION_HANDLE_EMOJIS
} from './Emojis.constants';
export const initialState = fromJS({
    emojis:{}
});


export const handleemojis = (state, payload) => state.update('emojis', emojis => fromJS(payload));

const reducerFunctions = {
    [ ACTION_HANDLE_EMOJIS] : handleemojis
};

const createTaskReducer = createReducerFromObject(reducerFunctions,initialState);
export default createTaskReducer;