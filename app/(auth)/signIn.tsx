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
import { useRouter } from "expo-router";

const SignIn = () => {
  const [email, setemail] = React.useState("");
  const router = useRouter();
  const OnSignIn = async () => {
    router.push({ pathname: "/authenticate", params: { email } });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>SignIn or create account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setemail}
      />

      <Pressable style={styles.button} onPress={OnSignIn}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;

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
