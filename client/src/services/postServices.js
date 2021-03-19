import axios from "axios";

const getAll = () => {
  return axios.get("http://localhost:5000/api/posts");
};

const getOne = (postId) => {
    return axios.get(`http://localhost:5000/api/posts/${postId}`);
  };

const createPost = (postData) => {
  return axios.post("http://localhost:5000/api/posts/create", postData);
};

const editPost = (postId, postData) => {
  return axios.put(`http://localhost:5000/api/posts/edit/${postId}`, postData);
};

const likePost = (postId) => {
    return axios.get(`http://localhost:5000/api/posts/like/${postId}`);
}

const unlikePost = (postId) => {
  return axios.get(`http://localhost:5000/api/posts/unlike/${postId}`);
}

export default {
  getAll,
  getOne,
  createPost,
  editPost,
  likePost,
  unlikePost
};
