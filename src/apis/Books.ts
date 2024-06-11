import { instance } from "./instance";

export const user = async () => {
  return await instance.get("/book/find");
};
