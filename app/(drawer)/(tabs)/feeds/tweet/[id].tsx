import { useSearchParams } from "expo-router";
import tweets from "../../../../../assets/data/tweets";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import Tweet from "../../../../../components/Tweet";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getTweet } from "../../../../../lib/api/tweets";
import Loader from "../../../../../components/Loader";
export default function TweetScreen() {
  const { id } = useSearchParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["tweet", id],
    queryFn: () => getTweet(id as string),
  });
  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (error) {
    return ToastAndroid.show(error.message, ToastAndroid.SHORT);
  }

  const tweet = data;
  if (!tweet) {
    return <Text>Tweet not found</Text>;
  }
  return <Tweet tweet={tweet} />;
}
const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
