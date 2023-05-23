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
