import { Link, useNavigation, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  GestureResponderEvent,
  SafeAreaView,
  ToastAndroid,
} from "react-native";
import { TweetColor } from "../constants/Colors";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTweet } from "../lib/api/tweets";
import Loader from "../components/Loader";
const user = {
  id: "u1",
  username: "VadimNotJustDev",
  name: "Vadim",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};
export default function NewTweetScreen() {
  const [Tweet, setTweet] = useState("");
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isError, error } = useMutation({
    mutationFn: createTweet,
    onSuccess: (data) =>
      queryClient.setQueryData(["tweets"], (existingTweets) => {
        return [data, ...existingTweets];
      }),
  });
  async function onTweetPressed() {
    try {
      await mutateAsync({ content: Tweet });
      setTweet("");
      router.back();
    } catch (e) {
      ToastAndroid.show(e?.message, ToastAndroid.SHORT);
    }
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href={"../"} style={styles.cancelLink}>
            Cancel
          </Link>
          {isLoading && <Loader />}
          <Pressable onPress={onTweetPressed} style={styles.button}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>
        <View style={styles.inputContainer}>
          <Image src={user.image} style={styles.uimage} />
          <TextInput
            onChangeText={setTweet}
            value={Tweet}
            placeholder="What's happening?"
            multiline
            numberOfLines={5}
            style={{ flex: 1 }}
          />
        </View>
      </View>
      {isError && <Text>{error?.message}</Text>}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  container: {
    padding: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center",
  },
  cancelLink: {
    fontSize: 18,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  uimage: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginEnd: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: TweetColor,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
