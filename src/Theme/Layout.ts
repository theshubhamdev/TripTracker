import { Dimensions, StyleSheet } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");

export { SCREEN_HEIGHT, SCREEN_WIDTH, WINDOW_HEIGHT, WINDOW_WIDTH };

export default StyleSheet.create({
  /* Column Layouts */
  column: {
    flexDirection: "column",
  },
  columnReverse: {
    flexDirection: "column-reverse",
  },
  colCenter: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  colVCenter: {
    flexDirection: "column",
    alignItems: "center",
  },
  colHCenter: {
    flexDirection: "column",
    justifyContent: "center",
  },
  /* Row Layouts */
  row: {
    flexDirection: "row",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowVCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  rowHCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  /* Default Layouts */
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  alignItemsStart: {
    alignItems: "flex-start",
  },
  alignItemSelfCenter: {
    alignSelf: "center",
  },
  alignItemsEnd: {
    alignItems: "flex-end",
  },
  alignItemsStretch: {
    alignItems: "stretch",
  },
  justifyContentStart: {
    justifyContent: "flex-start",
  },
  justifyContentEnd: {
    justifyContent: "flex-end",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  justifyContentAround: {
    justifyContent: "space-around",
  },
  justifyContentBetween: {
    justifyContent: "space-between",
  },
  scrollSpaceAround: {
    flexGrow: 1,
    justifyContent: "space-around",
  },
  scrollSpaceBetween: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  selfStretch: {
    alignSelf: "stretch",
  },
  selfStart: {
    alignSelf: "flex-start",
  },
  selfCenter: {
    alignSelf: "center",
  },
  selfEnd: {
    alignSelf: "flex-end",
  },
  /* Sizes Layouts */
  fill: {
    flex: 1,
  },
  shrink: {
    flex: 0,
  },
  wrapText: {
    flexWrap: "wrap",
  },
  noWrapText: {
    flexWrap: "nowrap",
  },
  fillScroll: {
    flexGrow: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  spanHeight: {
    minHeight: "100%",
  },
  fullSize: {
    height: "100%",
    width: "100%",
  },
  fullWidth: {
    width: "100%",
  },
  halfWidth: {
    width: "50%",
  },
  fullHeight: {
    height: "100%",
  },
  minFullHeight: {
    minHeight: "100%",
  },
});
