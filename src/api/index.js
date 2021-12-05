import axios from "axios";

//const url = "https://memory-project-new.herokuapp.com/posts";
const url = "http://localhost:5000/posts";

export const fetchPosts = () => {
  return axios.get(url);
};

export const createPost = (newPost) => {
  return axios.post(url, newPost);
};

export const updatedPost = (id, updatePost) => {
  return axios.patch(`${url}/${id}`, updatePost);
};

export const deletePost = (id) => {
  const deleted = axios.delete(`${url}/${id}`);
  return deleted;
};

export const likeCount = (id) => {
  return axios.patch(`${url}/${id}/likePost`);
};
