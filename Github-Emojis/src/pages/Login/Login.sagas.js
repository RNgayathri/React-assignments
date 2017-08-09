import {
    take,
    call
} from "redux-saga/effects";
import {
    ACTION_LOGIN_REQUEST
} from "./Login.constants";
import request from "../../utils/request";
export default [loginWatcher];

export function* loginWatcher() {
    while (true) {
        const {payload} = yield take(ACTION_LOGIN_REQUEST);
        yield call(authorize, payload.username, payload.password);
    }
}
function* authorize(username, password) {
    console.log("saga called");
    try {
        return yield call(request,'/rest/sign-up-bbaccount/brainblox-account-login', {
                method: 'POST',
                body: {
                    "dob": "",
                    "fullName": "",
                    "isActivated": true,
                    "password": password,
                    "profilePic": "",
                    "userName": username
                }
            },
            {
                "onSuccess": function (response) {
                    console.log(response);
                },
                "onError": function () {
                    return false;
                }
            },
            false);
    }
    catch (error) {
        return false;
    }
}