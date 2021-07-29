import axios from "axios";
const url = "https://memories-poject.herokuapp.com/api/posts";
export const fetchPosts = () => (
  axios.get(url)
)
export const createPosts = (newPost) => (
  axios.post(url, newPost)
  
)

export const updatePost = (currentId, updatedPost) => {
  axios.patch(`${url}/update/${currentId}`, updatedPost);
}
export const deletePost = (currentId) => {
  axios.delete(`${url}/deletes/${currentId}`);
};
export const likePost = (currentId) => 
  axios.patch(`${url}/like/${currentId}`);
