import { Router } from "express";
import {getPost,createPost,updatePost,removePost,getPosts, addComment} from "../controllers/posts.controllers.js";

const router = Router();

router.get("/posts", getPosts);

router.get("/posts/:id", getPost);

router.post("/posts", createPost);

router.put("/posts/:id", updatePost);

router.delete("/posts/:id", removePost);

router.put('/post/:id/comment/add', addComment);

export default router;
