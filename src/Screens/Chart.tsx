import { View } from "react-native";
import React from "react";
import { BaseText } from "../Components";
import { useTheme } from "../Hooks";

const Chart = () => {
  const { Layout, Fonts } = useTheme();
  return (
    <View style={[Layout.fill, Layout.center]}>
      <BaseText style={[Fonts.textColorGrey, Fonts.textMidLarge]}>
        Chart
      </BaseText>
    </View>
  );
};

export default Chart;
