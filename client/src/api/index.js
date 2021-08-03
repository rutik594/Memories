import axios from "axios";
/*const url = "https://memories-poject.herokuapp.com/api/posts"*/const API = axios.create({ baseURL: 'http://localhost:3001/' });;


API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});
export const fetchPosts = () => (
  API.get('/api/posts')
)
export const createPosts = (newPost) => (
  API.post('/api/posts', newPost)
  
)

export const updatePost = (currentId, updatedPost) => {
  API.patch(`/api/posts/update/${currentId}`, updatedPost);
}
export const deletePost = (currentId) => {
  API.delete(`/api/posts/deletes/${currentId}`);
};
export const likePost = (currentId) => 
  API.patch(`/api/posts/like/${currentId}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);