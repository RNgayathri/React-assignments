import {
    take,
    call,
    cancel,
    fork
} from "redux-saga/effects";
import {
   handleemojis
} from "./Emojis.actions";
import {
    ACTION_FETCH_EMOJIS
} from "./Emojis.constants";
import request from "../../utils/request";
import {store} from "../../index";

export default [emojis];
function onemojisFetchSuccess(response){
    store.dispatch(handleemojis(response));
}
export function* emojis() {
    while (true) {
        const {payload} = yield take(ACTION_FETCH_EMOJIS);
        console.log(payload);
        yield call(_fetchEmojis, payload);
    }
}
function* _fetchEmojis() {
    try {
        return yield call(request, 'https://api.github.com/emojis', {
                method: 'GET'
            },
            {
                "onSuccess": function (response) {
                    onemojisFetchSuccess(response);
                },
                "onError": function (response) {

                }
            },
            false);
    }
    catch (error) {
        return false;
    }
}
