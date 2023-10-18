import { StyleSheet, View } from "react-native";

import { MenuCard } from "./card";

import { MENU } from "../../constants/menu";

export const Menu = () => {
  const firstHalf = MENU.slice(0, 2);
  const secondHalf = MENU.slice(2, 4);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {firstHalf.map((item, idx) => (
          <MenuCard item={item} key={idx} />
        ))}
      </View>

      <View style={styles.row}>
        {secondHalf.map((item, idx) => (
          <MenuCard item={item} key={idx} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 32,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },
});
