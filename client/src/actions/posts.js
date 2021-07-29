import * as api from "../api/index";
import {FETCH_ALL,CREATE,UPDATE,DELETE,LIKE} from '../constants/actionTypes'
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    console.log("response data in action", data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPosts(post);
    console.log("responsedata in create posts action cerator", data);
    dispatch({ type: CREATE, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
export const updatePost = (currentId,post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(currentId,post);
    console.log("responsedata in update posts action cerator", data);
    dispatch({ type: UPDATE, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
export const deletePost = (currentId) => async (dispatch) => {
  try {
    await api.deletePost(currentId);
 
    dispatch({ type: DELETE, payload: currentId });
  } catch (err) {
    console.log(err.message);
  }
};
export const likePost = (currentId) => async (dispatch) => {
  try {
    const { data } = await api.likePost(currentId);
    console.log("responsedata in update posts action cerator", data);
    dispatch({ type: LIKE, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
