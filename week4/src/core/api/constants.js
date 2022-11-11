import axios from "axios";

export const TOKEN = "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";

const instance = axios.create({
  baseURL: "https://api.github.com/users",
  Authorization: TOKEN,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export async function GET_DATA(path) {
  try {
    const result = await instance.get(path);
    return result.data;
  } catch (e) {
    console.log(e);
  }
}

export function getUserInfo(userName) {
  return GET_DATA(userName);
}

export function getUserStar(userName) {
  return GET_DATA(`${userName}/starred`);
}
