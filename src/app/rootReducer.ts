import { combineReducers } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
  nice: () => ({}),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
