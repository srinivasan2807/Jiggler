import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";

const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator />
    </View>
  );
};
const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Loader;
