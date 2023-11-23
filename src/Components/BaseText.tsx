import { StyleProp, Text, TextStyle } from "react-native";
import React, { FC } from "react";
import { useTheme } from "../Hooks";

interface Props {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const BaseText: FC<Props> = ({ children, style }) => {
  const { Fonts } = useTheme();
  return (
    <Text style={[Fonts.fPoppins, Fonts.textColorBlack, style]}>
      {children}
    </Text>
  );
};

export default BaseText;
