import { StyleSheet, Image, Text } from "react-native";

import { useFonts } from "expo-font";
import { Righteous_400Regular } from "@expo-google-fonts/righteous";
import { Poppins_500Medium } from "@expo-google-fonts/poppins";
import { IstokWeb_400Regular } from "@expo-google-fonts/istok-web";
import { Inter_600SemiBold } from "@expo-google-fonts/inter";

import { Button, Menu } from "./app/components";
import { MainLayout } from "./app/layout";
import { colors } from "./app/themes";
import { Logo } from "./app/images";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Righteous_400Regular,
    Poppins_500Medium,
    IstokWeb_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <MainLayout>
      <Image source={Logo} />
      <Text style={styles.title}>Digital Dairy Farm</Text>

      <Menu />

      <Text style={styles.tagline}>{`“All Things\nOne Place To Manage”`}</Text>

      <Button text="GET STARTED" />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.neutral,
    fontFamily: "Righteous_400Regular",
    fontSize: 28,
    lineHeight: 36,
    textAlign: "center",
    marginBottom: 30,
  },
  tagline: {
    color: colors.neutral,
    fontFamily: "Poppins_500Medium",
    fontSize: 19,
    fontWeight: "500",
    lineHeight: 44,
    textAlign: "center",
    marginTop: 36,
    marginBottom: 44,
  },
});
