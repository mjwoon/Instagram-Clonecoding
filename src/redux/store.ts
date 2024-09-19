import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers'; // rootReducer는 각각의 slice를 합친 것

const store = configureStore({
  reducer: rootReducer,
});

export default store;
