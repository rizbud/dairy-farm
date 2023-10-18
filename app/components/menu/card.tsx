import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { colors } from "../../themes";

import type { Menu } from "../../constants/menu";

interface MenuCardProps {
  item: Menu;
}

export const MenuCard = (props: MenuCardProps) => {
  const { item } = props;

  return (
    <TouchableOpacity activeOpacity={0.75} style={styles.container}>
      <Image source={item.image} style={styles.image} />

      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.neutral,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 140,
    gap: 12,
  },
  image: {
    width: 100,
    height: 60,
    objectFit: "contain",
  },
  label: {
    color: colors.deepBlue,
    fontSize: 16,
    fontFamily: "IstokWeb_400Regular",
    fontWeight: "400",
    lineHeight: 22,
    textAlign: "center",
  },
});
