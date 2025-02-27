import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import ImageC from "./components/ImageC";
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <ImageC />
      </ScrollView>
    </View>
  );
}
