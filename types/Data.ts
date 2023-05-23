export interface TweetResponse {
  id: string;
  user: User;
  createdAt: string;
  content: string;
  image?: string;
  numberOfComments?: number;
  numberOfRetweets?: number;
  numberOfLikes?: number;
  impressions?: number;
}

export interface User {
  id: string;
  username: string;
  name: string;
  image?: string;
}

