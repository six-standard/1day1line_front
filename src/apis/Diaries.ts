import { instance } from "./instance";

export const write = async (content: string) => {
  return await instance.post("/diary/write", { content: content });
};

export const list = async (year: number, month: number) => {
  return await instance.get(
    `/diary/list?year=${year}&month=${month.toString().padStart(2, "0")}`
  );
};

export const detail = async (date: string) => {
  return await instance.get(`/diary/detail?date=${date}`);
};

export const setTop = async (date: string, id: number) => {
  return await instance.patch(`/diary/top`, { date, id });
};

export const search = async (content: string) => {
  return await instance.get(`/diary/search?content=${content}`);
};
