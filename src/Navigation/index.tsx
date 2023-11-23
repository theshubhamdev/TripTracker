import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./index.types";
import { ChartScreen, HomeScreen, WalletScreen } from "../Screens";
import GuideTabNavigator from "./GuideTabsNavigator";
import { useTheme } from "../Hooks";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator<RootStackParamList>();

const Navigation = () => {
  const { Colors, Fonts } = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.primary,
          tabBarLabelStyle: [Fonts.textMicro, { paddingBottom: 20 }],
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Foundation name="home" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={WalletScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="bag-shopping" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Guide"
          component={GuideTabNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="compass" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Chart"
          component={ChartScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <View
                style={[
                  {
                    backgroundColor: focused
                      ? Colors.bottomTabIcon
                      : Colors.grey,
                  },
                  styles.chartIcon,
                ]}
              >
                <View style={[styles.outerCircle]}>
                  <View
                    style={[
                      {
                        backgroundColor: focused
                          ? Colors.bottomTabIcon
                          : Colors.grey,
                      },
                      styles.circle,
                    ]}
                  />
                </View>
                <MaterialIcons
                  name="show-chart"
                  color={Colors.white}
                  size={15}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  chartIcon: {
    borderRadius: 4,
    padding: 2,
  },
  outerCircle: {
    position: "absolute",
    margin: 1,
    top: -5,
    right: -2,
    backgroundColor: "white",
    width: 7,
    height: 7,
    borderRadius: 3,
  },
  circle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 1,
  },
});
