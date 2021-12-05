import * as Types from "../constants/actionTypes";
const initialState = { posts: [] };
const Postsreducers = (state = initialState, action) => {
  switch (action.type) {
    case Types.DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case Types.UPDATE:
    case Types.LIKE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case Types.FETCH_ALL:
      return { ...state, posts: action.payload.data };
    case Types.CREATE:
      return { ...state, posts: [action.payload.data, ...state.posts] };
    default:
      return state;
  }
};

export default Postsreducers;
