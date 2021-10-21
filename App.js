import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";

const App = () => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => WebBrowser.openBrowserAsync("https://expo.dev")}
        title={"Open Web Browser (default)"}
      />
      <Button
        onPress={() =>
          WebBrowser.openBrowserAsync("https://expo.dev", {
            controlsColor: "#e63946",
            dismissButtonStyle: "close",
            enableBarCollapsing: true,
            toolbarColor: "#f1faee",
          })
        }
        title={"Open Web Browser (custom)"}
      />
      <Button
        onPress={() => Linking.openURL("https://expo.dev")}
        title={"Open Web Browser (external)"}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
