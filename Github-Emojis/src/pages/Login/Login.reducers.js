import {createReducerFromObject} from '../../utils/reducerUtils';
import {fromJS} from 'immutable';
import {
    ACTION_LOGIN_REQUEST
} from './Login.constants';
export const initialState = fromJS({

});
const reducerFunctions = {
    [ ACTION_LOGIN_REQUEST] : state => state
};

const createTaskReducer = createReducerFromObject(reducerFunctions,initialState);
export default createTaskReducer;