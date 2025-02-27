import React from "react";
import { Pressable, Text } from "react-native";

export default function PressableC() {
  const handlePress = () => {
    console.log("Text is pressed");
  };
  return (
    <Pressable onPress={handlePress}>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
        excepturi enim, amet iusto aut saepe eius maiores molestias laudantium
        quod praesentium aliquid voluptas! Qui debitis corporis odio, ea
        reiciendis in.
      </Text>
    </Pressable>
  );
}
