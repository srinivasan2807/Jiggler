import { EvilIcons } from "@expo/vector-icons";
import { TweetResponse } from "./Data";

export type IconButtonProps = {
  iconName: React.ComponentProps<typeof EvilIcons>["name"];
  text?: string | number;
};

export type TweetProps = {
  tweet: TweetResponse;
};
