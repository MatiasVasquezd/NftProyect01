import axios from "axios";

export const getPostsRequest = async () => await axios.get("/api/posts");

export const getPostRequest = async (id) => await axios.get("/api/posts/" + id);

export const deletePostRequest = async (id) =>
  await axios.delete("/api/posts/" + id);

export const createPostRequest = async (post) => {
  const form = new FormData();
  for (let key in post) {
    form.append(key, post[key]);
  }
  return await axios.post("/api/posts", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updatePostRequest = async (id, newPostFields) => {
  const form = new FormData();
  for (let key in newPostFields) {
    form.append(key, newPostFields[key]);
  }
  return axios.put("/api/posts/" + id, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const addComment = async (id, comment) => {
  try {
    const res = await axios.put(`/api/post/${id}/comment/add`, {comment});
    return res.data;
} catch (err) {
    return err.response.data.errors;
}
}
