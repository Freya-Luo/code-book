import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { updateCellsMiddleware } from './middlewares/update-cells-middleware';

export const store = createStore(reducers, {}, applyMiddleware(thunk, updateCellsMiddleware));
