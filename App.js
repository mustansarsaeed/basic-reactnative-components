import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image,
  Platform,
  Button,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container]}>
      <Text numberOfLines={1}>Hello React Native</Text>

      {/* <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
          }} */}

      <Button title="Click Me" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "android" ? "#fff" : "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
});
