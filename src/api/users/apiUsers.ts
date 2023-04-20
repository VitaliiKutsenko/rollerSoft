import { $api } from "../api.config";
import { UserModels } from "@src/models/userModels";
import axios from "axios";
import { PostsModel } from "@src/models/postsModel";

export const getAllUsers = async () => {
  try {
    const { data } = await $api.get<UserModels[]>("/users");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};

export const getUserById = async (id: string) => {
  try {
    const { data } = await $api.get<UserModels>(`/users/${id}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
export const getPostByUserId = async (id: number, start: number) => {
  try {
    const { data } = await $api.get<PostsModel[]>(
      `/users/${id}/posts?_start=${start}&_limit=2`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
