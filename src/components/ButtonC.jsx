import React from "react";
import { Button } from "react-native";

export default function ButtonC() {
  return (
    <Button
      title="Press Me"
      onPress={() => {
        console.log("Button is pressed");
      }}
    ></Button>
  );
}
