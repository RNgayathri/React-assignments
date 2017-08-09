import {getHooks} from './utils/hooks';
export default function createRoutes(store) {

    // create reusable async injectors using getHooks factory
    const {injectReducer, injectSagas} = getHooks(store);

    return [
        {
            path: '/emojis',
            getComponent(location, cb){
                require.ensure(
                    ['./pages/Emojis/Emojis'],
                    require => {
                        const Emojis = require('./pages/Emojis/Emojis').default;
                        const emojiReducer = require('./pages/Emojis/Emojis.reducer.js').default;
                        const emojiSagas = require('./pages/Emojis/Emojis.sagas.js').default;
                        injectReducer('Emojis', emojiReducer);
                        injectSagas(emojiSagas);
                        cb(null, {
                            main: Emojis
                        })
                    })
            },
            indexRoute: {},
            onLeave: () => {

            }
        },
        {
            path: '/login',
            getComponent(location, cb){
                require.ensure(
                    ['./pages/Login/Login'],
                    require => {
                        const Login = require('./pages/Login/Login').default;
                        const LoginReducer = require('./pages/Login/Login.reducers.js').default;
                        const LoginSagas = require('./pages/Login/Login.sagas.js').default;
                        injectReducer('Login', LoginReducer);
                        injectSagas(LoginSagas);
                        cb(null, {
                            main: Login
                        })
                    })
            },
            indexRoute: {}
        }
    ];
}
