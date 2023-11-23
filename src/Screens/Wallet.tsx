import { View } from "react-native";
import React from "react";
import { useTheme } from "../Hooks";
import { BaseText } from "../Components";

const Wallet = () => {
  const { Layout, Fonts } = useTheme();
  return (
    <View style={[Layout.fill, Layout.center]}>
      <BaseText style={[Fonts.textColorGrey, Fonts.textMidLarge]}>
        Wallet
      </BaseText>
    </View>
  );
};

export default Wallet;
