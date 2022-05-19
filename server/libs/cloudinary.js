import { v2 as cloudinary } from "cloudinary";
import { API_KEY, API_SECRET, CLOUD_NAME } from "../config.js";

cloudinary.config({
  cloud_name: "dtwoppdoy",
  api_key: "813676244278431",
  api_secret: "BawIAxfyebMroNORQsasxO26H3c",
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "PlayLife",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
