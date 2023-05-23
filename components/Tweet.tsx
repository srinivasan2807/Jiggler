import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { TweetResponse } from "../types/Data";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import IconButton from "./IconButton";
import { TweetProps } from "../types/type";
import { Link } from "expo-router";

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <Link href={`/feeds/tweet/${tweet.id}`} asChild>
      <Pressable style={styles.container}>
        <Image src={tweet.user.image} style={styles.uimage} />
        <View style={styles.mainContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.username}>{tweet.user.username} · 2h</Text>
            <Entypo
              name="dots-three-horizontal"
              size={16}
              color="black"
              style={{ marginLeft: "auto" }}
            />
          </View>

          <Text style={styles.userContent}>{tweet.content}</Text>
          {tweet.image && <Image src={tweet.image} style={styles.tweetImage} />}
          <View style={styles.footer}>
            <IconButton iconName={"comment"} text={tweet.numberOfComments} />
            <IconButton iconName={"retweet"} text={tweet.numberOfRetweets} />
            <IconButton iconName={"heart"} text={tweet.numberOfLikes} />
            <IconButton iconName={"chart"} text={tweet.impressions || 0} />
            <IconButton iconName={"share-apple"} />
          </View>
        </View>
      </Pressable>
    </Link>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey",
    backgroundColor: "white",
  },
  uimage: { width: 50, height: 50, borderRadius: 50 },
  userContent: {
    marginTop: 5,
    lineHeight: 20,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "600",
  },
  tweetImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 15,
    marginVertical: 10,
  },
  username: {
    marginLeft: 5,
    color: "gray",
  },
  footer: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",
  },
});
export default Tweet;
