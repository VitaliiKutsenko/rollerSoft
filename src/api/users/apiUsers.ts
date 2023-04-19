import { $api } from "../api.config";
import { UserModels } from "@src/models/userModels";
import axios from "axios";

export const apiUsers = async () => {
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
