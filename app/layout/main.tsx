import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { colors } from "../themes";

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
        <LinearGradient
          colors={["rgba(68, 73, 213, 0.69)", "rgba(68, 73, 213, 0)"]}
          style={styles.shapeTopCorner}
        />

        <View style={styles.shapeBottomCorner} />

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
    top: -220,
    left: -420,
    width: 600,
    height: 1010,
    borderRadius: 130,
    transform: [{ rotate: "45deg" }],
  },
  shapeBottomCorner: {
    backgroundColor: "rgba(72, 57, 210, 0.9)",
    position: "absolute",
    bottom: -410,
    right: -130,
    width: 400,
    height: 500,
    borderRadius: 60,
    transform: [{ rotate: "70deg" }],
  },
});
