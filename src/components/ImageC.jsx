import React from "react";
import { Image } from "react-native";
const logoImg = require("../../assets/adaptive-icon.png");

export default function ImageC() {
  return (
    <>
      <Image source={logoImg} style={{ height: 300, width: 300 }} />;
      <Image
        source={{
          uri: `https://cdn.pixabay.com/photo/2025/02/26/07/33/girls-9432351_1280.jpg`,
        }}
        style={{ height: 300, width: 300 }}
      />
    </>
  );
}
