import React, { FC } from "react";
import {TimelineTracker} from "../../Components/Guide";
import { todaysPlaces } from "./index.utils";
import { useIsFocused } from "@react-navigation/native";

const Today: FC = () => {
  const isFocused = useIsFocused();
  return isFocused ? <TimelineTracker places={todaysPlaces} /> : <></>;
};

export default Today;
