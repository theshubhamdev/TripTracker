import { useEffect, useState } from "react";
import messaging, {
  FirebaseMessagingTypes,
} from "@react-native-firebase/messaging";
import { useNavigation } from "@react-navigation/native";
import { PermissionsAndroid } from "react-native";

// Register background handler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log(
    "Message handled in the background!",
    JSON.stringify(remoteMessage, null, 2)
  );
});

const PushNotifications = () => {
  const [enabled, setEnabled] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      console.log(authStatus);
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log("Authorization status:", authStatus);
        setEnabled(true);
      } else {
      }
    }
    requestUserPermission();
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    // Handle notifications that are received while the application is in Foreground state
    messaging().onMessage(handleNotification);

    // Handle the notification that opened the app from Background state
    messaging().onNotificationOpenedApp(handleNotification);

    // Handle the notification that opened the app from Quit state
    messaging().getInitialNotification().then(handleNotification);
  }, [enabled]);

  const handleNotification = (
    remoteMessage: FirebaseMessagingTypes.RemoteMessage | null
  ) => {
    if (!remoteMessage) {
      return;
    }
    console.log(JSON.stringify(remoteMessage, null, 2));

    if (remoteMessage.data?.tripDate) {
      navigation.navigate("Guide", { screen: remoteMessage.data?.tripDate });
    }
  };

  return null;
};

export default PushNotifications;
