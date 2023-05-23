import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import { TweetColor } from "../../../../constants/Colors";
import Tweet from "../../../../components/Tweet";
import tweets from "../../../../assets/data/tweets";
import { useQuery } from "@tanstack/react-query";
import { listTweets } from "../../../../lib/api/tweets";
import Loader from "../../../../components/Loader";

export default function FeedScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tweets"],
    queryFn: listTweets,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return ToastAndroid.show(error.message, ToastAndroid.SHORT);
  }

  return (
    <View style={styles.page}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Tweet tweet={item} />}
        keyExtractor={(item) => item.id}
      />
      <Link href={"/composetweet"} asChild>
        <Entypo
          name="plus"
          size={24}
          color="white"
          style={styles.floatingButton}
        />
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  floatingButton: {
    backgroundColor: TweetColor,
    padding: 15,
    borderRadius: 50,
    position: "absolute",
    right: 15,
    bottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "hidden",
  },
});
