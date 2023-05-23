import { useSearchParams } from "expo-router";
import tweets from "../../../../../assets/data/tweets";
import {Text} from 'react-native'
import Tweet from "../../../../../components/Tweet";
import React from 'react'
export default function TweetScreen() {
  const { id } = useSearchParams();
  const tweet = tweets.find((item) => item.id === id);
  if (!tweet) {
    return <Text>Tweet not found</Text>;
  }
  return <Tweet tweet={tweet} />;
}
