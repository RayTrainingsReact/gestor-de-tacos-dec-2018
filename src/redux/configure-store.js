import {createStore, combineReducers} from 'redux';
//import reducer from './algun_lugar.js';
import exampleReducer from './reducers/example-reducer';

export default function configureStore() {
	const reducers = combineReducers({
		//aquí vienen la combinación llave dentro del store -> reducer
		//key: reducer
		exampleKey: exampleReducer
	});

	return createStore(reducers);
}
