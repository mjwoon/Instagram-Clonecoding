import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth/authSlice";
import { homeReducer } from "./reducers/home/homeSlice";
import { modalReducer } from "./reducers/modal/modalSlice";
import { directReducer } from "./reducers/DM/DirectSlice";
import { uploadReducer } from "./reducers/upload/uploadSlice";
import { profileReducer } from "./reducers/profile/profileSlice";
import { editReducer } from "./reducers/edit/editSlice";
import { commonReducer } from "./reducers/common/commonSlice";
import { paragraphReducer } from "redux/reducers/paragraph/paragraphSlice";

export const store = configureStore({
  reducer: {
    direct: directReducer,
    auth: authReducer,
    home: homeReducer,
    paragraph: paragraphReducer,
    modal: modalReducer,
    upload: uploadReducer,
    profile: profileReducer,
    edit: editReducer,
    common: commonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
