import { View } from "react-native";
import React from "react";
import { useTheme } from "../Hooks";
import { BaseText } from "../Components";

const Home = () => {
  const { Layout, Fonts } = useTheme();
  return (
    <View style={[Layout.fill, Layout.center]}>
      <BaseText style={[Fonts.textColorGrey, Fonts.textMidLarge]}>
        Home Page
      </BaseText>
    </View>
  );
};

export default Home;
