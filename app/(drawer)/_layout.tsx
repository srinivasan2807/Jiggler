import { createDrawerNavigator } from "@react-navigation/drawer";
import { Stack, withLayoutContext } from "expo-router";
const DrawerNavigator = createDrawerNavigator().Navigator;
const Drawer = withLayoutContext(DrawerNavigator);
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};
export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{ headerShown: false, title: "Home" }}
      />
      <Drawer.Screen name="bookmarks" options={{ title: "Bookmarks" }} />
      <Drawer.Screen name="twitterblue" options={{ title: "Twitter Blue" }} />
    </Drawer>
  );
}
