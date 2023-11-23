import Colors from "./Color";
import { FontSize } from "./Variables";

export type ThemeColors = typeof Colors;

export type ThemeFontSize = typeof FontSize;

export type ThemeVariables = {
  Colors: ThemeColors,
  FontSize: ThemeFontSize,
}