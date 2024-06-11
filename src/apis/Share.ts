import { instance } from "./instance";

export const check = async (password: string) => {
  return await instance.post("/share/check", { password });
};
