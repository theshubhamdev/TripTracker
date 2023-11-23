import React, { FC, useCallback } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItem,
  ImageSourcePropType,
  Image,
} from "react-native";
import { BaseText, ProgressLine, CircleWithLocationIcon } from "..";
import { convertDateTimeToHHMM } from "../../Utils";
import { useTheme } from "../../Hooks";

interface Place {
  title: string;
  description: string;
  time: Date;
  weather?: ImageSourcePropType;
}

interface Props {
  places: Place[];
}

const TimelineTracker: FC<Props> = ({ places }) => {
  const { Layout } = useTheme();

  const renderItem: ListRenderItem<Place> = useCallback(({ item, index }) => {
    const { weather } = item;
    const currentActivityTime = item.time.getTime();
    const nextActivityTime =
      places.length !== index + 1
        ? places[index + 1].time.getTime()
        : currentActivityTime;
    const currentTime = new Date().getTime();

    let percentageCompleted = 0;

    if (currentTime > nextActivityTime) {
      percentageCompleted = 100;
    } else if (
      currentTime >= currentActivityTime &&
      currentTime <= nextActivityTime
    ) {
      percentageCompleted =
        ((currentTime - currentActivityTime) * 100) /
        (nextActivityTime - currentActivityTime);
    }

    return places.length !== index + 1 ? (
      <View style={[Layout.row, { height: 100 }]}>
        <BaseText style={[styles.time]}>
          {convertDateTimeToHHMM(item.time)}
        </BaseText>
        <View>
          <CircleWithLocationIcon
            completed={index === 0 ? true : currentActivityTime < currentTime}
            title={item.title}
            description={item.description}
            delay={(index - 1) * 1000}
            duration={index === 0 ? 0 : 1000}
          />
          <ProgressLine
            percentage={percentageCompleted}
            style={styles.ml10}
            delay={index * 1000}
          />
        </View>
        {weather && <Image source={weather} style={styles.weather} />}
      </View>
    ) : (
      <View style={{ flexDirection: "row" }}>
        <BaseText style={[{ marginTop: 15, marginRight: 5 }]}>
          {convertDateTimeToHHMM(item.time)}
        </BaseText>
        <CircleWithLocationIcon
          completed={currentActivityTime < currentTime}
          title={item.title}
          description={item.description}
          delay={(index - 1) * 1000}
        />
        {weather && (
          <Image
            source={weather}
            style={styles.weather}
          />
        )}
      </View>
    );
  }, []);

  return <FlatList data={places} renderItem={renderItem} style={styles.root} />;
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
  time: {
    marginTop: 15,
    marginRight: 5,
  },
  ml10: {
    marginLeft: 10,
  },
  weather: {
    height: 50,
    width: 50,
    marginLeft: "auto",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 25,
  },
});

export default TimelineTracker;
