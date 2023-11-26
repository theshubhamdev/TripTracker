import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Navigation";
import { useTheme } from "./Hooks";
import { NotificationProvider } from "./Contexts/NotificationsContext";

function App(): JSX.Element {
  const { Colors } = useTheme();
  return (
    <SafeAreaProvider>
      <NotificationProvider>
        <StatusBar backgroundColor={Colors.black} barStyle={"light-content"} />
        <Navigation />
      </NotificationProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
