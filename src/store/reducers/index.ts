import { combineReducers } from "redux";
import usersReducer from "./usersSlice";
import AuthReducer from "./authSlice";
import ContactsReducer from "./contactSlice";

const rootReducer = combineReducers({
  user: usersReducer,
  contact: ContactsReducer,
  auth: AuthReducer,
});

export default rootReducer;
