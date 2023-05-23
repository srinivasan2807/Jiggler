import { config } from "./config";
export async function listTweets() {
  const res = fetch(`${config.API_URL}/tweet`, {
    headers: { Authorization: `Bearer ${config.API_TOKEN}` },
  });
  if ((await res).status === 401) {
    throw Error("you are not authorized.Please signin");
  }
  if ((await res).status !== 200) {
    throw Error("Error occured in fetching tweet");
  }
  return (await res).json();
}

export const getTweet = async (id: string) => {
  const res = fetch(`${config.API_URL}/tweet/${id}`, {
    headers: { Authorization: `Bearer ${config.API_TOKEN}` },
  });
  if ((await res).status === 401) {
    throw Error("you are not authorized.Please signin");
  }
  if ((await res).status !== 200) {
    throw Error("Error occured in fetching tweet");
  }
  return (await res).json();
};

export const createTweet = async (data: { content: string }) => {
  const res = await fetch(`${config.API_URL}/tweet`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.status === 401) {
    throw Error("you are not authorized.Please signin");
  }
  if (res.status !== 200) {
    throw Error("Error occured in Sending tweet");
  }
  return res.json();
};
