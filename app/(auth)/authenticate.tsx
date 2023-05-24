import {
  StyleSheet,
  Text,
  View,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { TweetColor } from "../../constants/Colors";
import { useSearchParams } from "expo-router";

const Authenticate = () => {
  const [token, settoken] = React.useState("");
  const { email } = useSearchParams();
  const OnPressed = async () => {
    console.log("Token", token, email);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Please Enter your email token</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Token"
        value={token}
        keyboardType="number-pad"
        onChangeText={settoken}
      />

      <Pressable style={styles.button} onPress={OnPressed}>
        <Text style={styles.buttonText}>SignIn</Text>
      </Pressable>
    </View>
  );
};

export default Authenticate;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  label: {
    fontSize: 24,
    marginVertical: 5,
    color: "gray",
    textAlign: "center",
  },
  error: {
    marginVertical: 5,
    color: "red",
  },
  input: {
    borderColor: "gray",
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    fontSize: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: TweetColor,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
