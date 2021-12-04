import * as Types from "../constants/actionTypes";

const Postsreducers = (posts = [], action) => {
  switch (action.type) {
    case Types.DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case Types.UPDATE:
    case Types.LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case Types.FETCH_ALL:
      return action.payload;
    case Types.CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default Postsreducers;
