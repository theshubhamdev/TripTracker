import React, { FC } from "react";
import { TimelineTracker } from "../../Components/Guide";
import { yesterdayPlaces } from "./index.utils";
import { useIsFocused } from "@react-navigation/native";

const Yesterday: FC = () => {
  const isFocused = useIsFocused();
  return isFocused ? <TimelineTracker places={yesterdayPlaces} /> : <></>;
};

export default Yesterday;
