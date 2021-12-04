import * as api from "../../api/index";
import * as Types from "../constants/actionTypes";

//action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data: fetch } = await api.fetchPosts();
    dispatch({ type: Types.FETCH_ALL, payload: fetch });
  } catch (err) {
    console.log(err);
  }
};

export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: Types.CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatedPost(id, post);
    console.log(data);
    dispatch({ type: Types.UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: Types.DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likeCount = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeCount(id);
    dispatch({ type: Types.LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
