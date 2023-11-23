import React, { FC } from "react";
import {TimelineTracker} from "../../Components/Guide";
import { tomorrowPlaces } from "./index.utils";
import { useIsFocused } from "@react-navigation/native";

const Tomorrow: FC = () => {
  const isFocused = useIsFocused();
  return isFocused ? <TimelineTracker places={tomorrowPlaces} /> : <></>;
};

export default Tomorrow;
