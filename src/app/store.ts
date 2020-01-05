import { configureStore } from '@reduxjs/toolkit';
import { isHmrEnabled }   from '../utils/dev';
import rootReducer        from './rootReducer';


const store = configureStore({
  reducer: rootReducer
});

if (isHmrEnabled(module)) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export default store;
