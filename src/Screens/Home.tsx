import { Alert, BackHandler, Button, View } from "react-native";
import React, { useCallback } from "react";
import { useTheme } from "../Hooks";
import { BaseText } from "../Components";
import {
  INotification,
  useNotification,
} from "../Contexts/NotificationsContext";

const Home = () => {
  const { Layout, Fonts } = useTheme();

  const { token, sendNotification, getDeviceToken } = useNotification();
  const sendNewNotification = useCallback(
    async (type: INotification) => {
      console.log("send notification");
      if (!token) {
        Alert.alert("Token Not Available", "Try Again");
        getDeviceToken();
        return;
      }
      BackHandler.exitApp();
      sendNotification(type);
    },
    [token, sendNotification]
  );

  return (
    <View style={[Layout.fill, Layout.center]}>
      <BaseText style={[Fonts.textColorGrey, Fonts.textMidLarge]}>
        Home Page
      </BaseText>
      <Button
        title="Send Normal Notification"
        onPress={() => sendNewNotification("BASE")}
      />
      <Button
        title="Navigate To Yesterday Screen"
        onPress={() => sendNewNotification("Yesterday")}
      />
      <Button
        title="Navigate To Today Screen"
        onPress={() => sendNewNotification("Today")}
      />
      <Button
        title="Navigate To Tomorrow Screen"
        onPress={() => sendNewNotification("Tomorrow")}
      />
    </View>
  );
};

export default Home;
