import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { UserReducer } from '../reducer';
import { imagesSaga } from '../sagas';

const reducers = combineReducers(
    { usersReducer: UserReducer }
);

const ConfigStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        reducers,
        composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
    );
    sagaMiddleware.run(imagesSaga);
    return store;
};

export default ConfigStore;