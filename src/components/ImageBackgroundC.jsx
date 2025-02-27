import React from "react";
import { ImageBackground, View, Text } from "react-native";

export default function ImageBackgroundC() {
  return (
    <>
      <View style={{ height: 300, width: 300 }}>
        <ImageBackground
          source={{
            uri: "https://images.freeimages.com/images/large-previews/588/futuristic-brain-data-visualization-0410-5697445.jpg",
          }}
        >
          <Text
            style={{ height: 300, width: 300, color: "yellow", marginTop: 20 }}
          >
            Hi I am a text where bg is an image
          </Text>
        </ImageBackground>
      </View>
    </>
  );
}
