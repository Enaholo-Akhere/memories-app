import { combineReducers } from "redux";
import PostsReducer from "./posts";

const RootReducers = combineReducers({ posts: PostsReducer });

export default RootReducers;
