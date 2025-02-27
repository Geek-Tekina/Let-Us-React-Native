import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import ImageC from "./components/ImageC";
import ImageBackgroundC from "./components/ImageBackgroundC";
import ButtonC from "./components/ButtonC";
import PressableC from "./components/PressableC";
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 35 }}>
      <ScrollView>
        <ImageC />
        <ImageBackgroundC />
        <ButtonC />
        <PressableC />
      </ScrollView>
    </View>
  );
}
