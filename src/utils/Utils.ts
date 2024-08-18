import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const tabletBreakpoint = 768; // breakpoint for tablets
const minColumnWidth = 120; // Minimum width for each column

// Function to calculate number of columns
export const calculateColumns = () => {
  if (width >= tabletBreakpoint) {
    return Math.floor(width / minColumnWidth);
  } else {
    return Math.floor(width / minColumnWidth);
  }
};