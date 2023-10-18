import { StyleSheet, Text } from "react-native";

import { useFonts } from "expo-font";
import { Righteous_400Regular } from "@expo-google-fonts/righteous";
import { Poppins_500Medium } from "@expo-google-fonts/poppins";
import { IstokWeb_400Regular } from "@expo-google-fonts/istok-web";
import { Inter_600SemiBold } from "@expo-google-fonts/inter";

import { Button } from "./app/components";
import { MainLayout } from "./app/layout";

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
      <Text>Open up App.tsx to start working on your app!</Text>

      <Button text="GET STARTED" />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 44,
    paddingVertical: 35,
  },
});
