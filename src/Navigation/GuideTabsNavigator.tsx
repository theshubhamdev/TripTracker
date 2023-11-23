import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { GuideTabParamList } from "./index.types";
import { useTheme } from "../Hooks";
import { Today, Tomorrow, Yesterday } from "../Screens";
import { View } from "react-native";
import { BaseText } from "../Components";
import { convertDateTimeToDDMonthFormat } from "../Utils";
import { FC } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator<GuideTabParamList>();

interface IGuideTabBarLabel {
  title: string;
  date: Date;
}

const GuideTabNavigator: FC = () => {
  const { Layout, Colors, Fonts } = useTheme();

  const navigation = useNavigation();
  // Today
  const today = new Date();

  // Yesterday
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  //Tomorrow
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <>
      <View
        style={[
          Layout.row,
          Layout.alignItemsCenter,
          { backgroundColor: Colors.white, padding: 30 },
        ]}
      >
        <MaterialCommunityIcons
          name="arrow-left"
          size={20}
          color={Colors.black}
          onPress={() => navigation.goBack()}
        />
        <View style={[Layout.alignItemsCenter, Layout.fill]}>
          <BaseText style={[Fonts.h1Bold]}>Itinerary Form</BaseText>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen
          name="Yesterday"
          component={Yesterday}
          options={{
            tabBarLabel: () => (
              <GuideTabBarLabel title="Yesterday" date={yesterday} />
            ),
          }}
        />
        <Tab.Screen
          name="Today"
          component={Today}
          options={{
            tabBarLabel: () => <GuideTabBarLabel title="Today" date={today} />,
          }}
        />
        <Tab.Screen
          name="Tomorrow"
          component={Tomorrow}
          options={{
            tabBarLabel: () => (
              <GuideTabBarLabel title="Tomorrow" date={tomorrow} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default GuideTabNavigator;

const GuideTabBarLabel: FC<IGuideTabBarLabel> = ({ title, date }) => {
  const { Layout, Fonts } = useTheme();

  return (
    <View style={[Layout.alignItemsCenter]}>
      <BaseText style={[Fonts.wt700]}>{title}</BaseText>
      <BaseText style={[Fonts.textColorSecondary]}>
        {convertDateTimeToDDMonthFormat(date)}
      </BaseText>
    </View>
  );
};
