import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { colors } from "../themes";

const shapeBottomCorner = require("../../assets/shape-bottom-corner.png");
const shapeTopCorner = require("../../assets/shape-top-corner.png");
const lineTopCorner = require("../../assets/line-top-corner.png");

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <LinearGradient
        colors={[colors.skyBlue, colors.royalPurple]}
        style={styles.container}
      >
        <Image source={shapeTopCorner} style={styles.shapeTopCorner} />
        <Image source={lineTopCorner} style={styles.shapeTopCorner} />
        <Image source={shapeBottomCorner} style={styles.shapeBottomCorner} />

        <ScrollView
          overScrollMode="never"
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {props.children}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 44,
    paddingTop: 60,
    paddingBottom: 30,
  },
  shapeTopCorner: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  shapeBottomCorner: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
