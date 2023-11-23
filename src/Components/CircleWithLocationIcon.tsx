import React, { FC, useEffect, useMemo, useState } from "react";
import { Animated, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../Hooks";
import BaseText from "./BaseText";

interface ProgressLinear {
  completed?: boolean;
  delay?: number;
  duration?: number;
  color?: string;
  inActiveColor?: string;
  style?: StyleProp<ViewStyle>;
  title?: string;
  description?: string;
}

const CircleWithLocationIcon: FC<ProgressLinear> = ({
  completed = false,
  delay = 0,
  duration = 1000,
  color,
  inActiveColor,
  style,
  title = "",
  description = "",
}) => {
  const { Colors, Layout, Fonts } = useTheme();

  const [progressAnimated, setProgressAnimated] = useState(
    new Animated.Value(0)
  );
  const [
    progressInterpolated,
    setProgressInterpolated,
  ] = useState<Animated.AnimatedInterpolation<number> | null>();

  const progressFg = useMemo((): ViewStyle => {
    return {
      backgroundColor: color ? color : Colors.primary,
    };
  }, [color, Colors]);

  const progressBg = useMemo((): ViewStyle => {
    return {
      backgroundColor: inActiveColor ? inActiveColor : Colors.transparent,
    };
  }, [inActiveColor, Colors]);

  useEffect(() => {
    if (!progressAnimated) {
      return;
    }
    setProgressInterpolated(
      progressAnimated.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 25],
      })
    );
  }, [completed, progressAnimated]);

  useEffect(() => {
    const animate = Animated.timing(progressAnimated, {
      toValue: 1,
      duration,
      delay,
      useNativeDriver: false,
    });
    animate.start();
  }, [delay, duration, completed, progressAnimated]);

  if (!progressInterpolated) {
    return <View />;
  }

  return (
    <View style={[Layout.row, Layout.alignItemsEnd]}>
      <View
        style={[
          Layout.row,
          styles.root,
          {
            borderColor: completed ? Colors.primary : Colors.grey,
            backgroundColor: Colors.background,
          },
          style,
        ]}
      >
        <View style={[progressBg, styles.statusContainer]}>
          {completed ? (
            <Animated.View
              style={[
                progressFg,
                styles.status,
                { height: progressInterpolated },
              ]}
            >
              <Ionicons name="location" size={15} color={Colors.white} />
            </Animated.View>
          ) : (
            <></>
          )}
        </View>
      </View>
      <View style={[styles.details]}>
        <BaseText style={[Fonts.wtBold]}>{title}</BaseText>
        <BaseText style={[Fonts.textColorSecondary]}>{description}</BaseText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 25,
    width: 25,
    borderRadius: 15,
    borderWidth: 1,
  },
  statusContainer: {
    flexDirection: "row",
  },
  status: {
    width: "100%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    paddingLeft: 10,
  },
});

export default CircleWithLocationIcon;
