import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import {
  Animated,
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

import { useTheme } from "../Hooks";

interface ProgressLinear {
  percentage: number;
  delay?: number;
  duration?: number;
  color?: string;
  inActiveColor?: string;
  style?: StyleProp<ViewStyle>;
}

const ProgressLinear: FC<ProgressLinear> = ({
  percentage,
  delay = 0,
  duration = 1000,
  color,
  inActiveColor,
  style,
}) => {
  const { Colors, Layout } = useTheme();

  const [layoutHeight, setLayoutHeight] = useState(percentage);
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
      backgroundColor: inActiveColor ? inActiveColor : Colors.grey,
    };
  }, [inActiveColor, Colors]);

  useEffect(() => {
    if (!progressAnimated) {
      return;
    }
    setProgressInterpolated(
      progressAnimated.interpolate({
        inputRange: [0, 100],
        outputRange: [0, layoutHeight],
      })
    );
  }, [percentage, progressAnimated, layoutHeight]);

  useEffect(() => {
    const animate = Animated.timing(progressAnimated, {
      toValue: percentage,
      duration,
      delay,
      useNativeDriver: false,
    });
    animate.start();
  }, [delay, duration, percentage, progressAnimated]);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setLayoutHeight(event.nativeEvent.layout.height);
  }, []);

  if (!progressInterpolated) {
    return <View />;
  }

  return (
    <View style={[Layout.row, styles.root]}>
      <View
        style={[progressBg, styles.statusContainer, style]}
        onLayout={onLayout}
      >
        <Animated.View
          style={[progressFg, styles.status, { height: progressInterpolated }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "100%",
  },
  statusContainer: {
    overflow: "hidden",
    flexDirection: "row",
  },
  status: {
    width: 2,
  },
  details: {
    paddingLeft: 10,
  },
});

export default ProgressLinear;
