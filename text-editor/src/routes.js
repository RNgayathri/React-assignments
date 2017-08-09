import {getHooks} from './utils/hooks';



export default function createRoutes(store) {

    // create reusable async injectors using getHooks factory
    const {injectReducer, injectSagas} = getHooks(store);

    return [

        {
            path: '/TaskViewer',
            getComponent(location, cb){
                require.ensure(
                    ['./pages/CreateTask/createTask'],
                    require => {
                        const createTask = require('./pages/CreateTask/createTask').default;
                        const createTaskReducer = require('./pages/CreateTask/createTask.reducers.js').default;
                        injectReducer('createTask', createTaskReducer);
                        cb(null, {
                            main: createTask
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
                    ['./pages/CreateTask/createTask'],
                    require => {
                        const createTask = require('./pages/CreateTask/createTask').default;
                        const createTaskReducer = require('./pages/CreateTask/createTask.reducers.js').default;
                        injectReducer('createTask', createTaskReducer);
                        cb(null, {
                            main: createTask
                        })
                    })
            },
            indexRoute: {},
            onLeave: () => {

            }
        },
    ];
}
