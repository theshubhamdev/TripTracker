import messaging from "@react-native-firebase/messaging";
import React, {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type INotification = "BASE" | "Yesterday" | "Today" | "Tomorrow";

interface NotificationContextProps {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  sendNotification: (type: INotification) => void;
  getDeviceToken: () => void;
}

const NotificationContext = createContext<NotificationContextProps>({
  token: "",
  sendNotification: function (type: INotification): void {
    throw new Error("Function not implemented.");
  },
  setToken: function (value: React.SetStateAction<string>): void {
    throw new Error("Function not implemented.");
  },
  getDeviceToken: function (): void {
    throw new Error("Function not implemented.");
  },
});

interface NotificationProviderProps {
  children: ReactNode;
}

const NotificationProvider: FC<NotificationProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const retriveToken = () => {
      try {
        AsyncStorage.getItem("fcmToken").then((value) => {
          if (value !== null) {
            setToken(value);
          } else {
            getDeviceToken();
          }
        });
      } catch (e) {
        console.log(e);
      }
    };
    retriveToken();
  }, []);

  const getDeviceToken = useCallback(async () => {
    await messaging().registerDeviceForRemoteMessages();
    const newToken = await messaging().getToken();
    try {
      await AsyncStorage.setItem("fcmToken", newToken);
      setToken(newToken);
    } catch (e) {
      // saving error
      console.log(e);
    }
    setToken(newToken);
  }, []);

  const sendNotification = useCallback(
    async (type: INotification) => {
      if (!token) {
        return;
      }
      let url =
        "https://us-central1-triptracker-8971a.cloudfunctions.net/sendHttpPushNotification";
      url += `?fcmToken=${token}`;

      url += "&title=Hey";
      url += `&body=${type}`;
      if (type !== "BASE") {
        url += `&tripDate=${type}`;
      }

      console.log(url);

      const data = await fetch(url);
    },
    [token]
  );
  return (
    <NotificationContext.Provider
      value={{ getDeviceToken, token, setToken, sendNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

const useNotification = () => useContext(NotificationContext);
export { useNotification, NotificationProvider };
