import {getHooks} from './utils/hooks';

export default function createRoutes(store) {

    // create reusable async injectors using getHooks factory
    const {injectReducer, injectSagas} = getHooks(store);

    return [

        {
            path: '/TaskViewer',
            getComponent(location, cb){
                require.ensure(
                    ['./Pages/Dropdown/Dropdown'],
                    require => {
                        const Dropdown = require('./Pages/Dropdown/Dropdown').default;
                        injectReducer('Dropdown', createTaskReducer);
                        cb(null, {
                            main: Dropdown
                        })
                    })
            },
            indexRoute: {},
            onLeave: () => {

            }
        },

        {
            path: '*',
            getComponent(location, cb){
                require.ensure(
                    ['./Pages/Dropdown/Dropdown'],
                    require => {
                        const Dropdown = require('./Pages/Dropdown/Dropdown').default;
                        injectReducer('Dropdown', createTaskReducer);
                        cb(null, {
                            main: Dropdown
                        })
                    })
            },
            indexRoute: {},
            onLeave: () => {

            }
        },
    ];
}
