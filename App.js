import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image,
  Platform,
  Button,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "android" ? "#fff" : "dodgerblue",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
