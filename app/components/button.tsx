import {
  TouchableOpacity,
  StyleSheet,
  type TouchableOpacityProps,
  Text,
} from "react-native";
import { colors } from "../themes";

interface ButtonProps extends Omit<TouchableOpacityProps, "children"> {
  text: string;
}

export const Button = (props: ButtonProps) => {
  const { text, ...rest } = props;

  return (
    <TouchableOpacity {...rest} activeOpacity={0.75} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightAzure,
    padding: 16,
    borderRadius: 10,
  },
  text: {
    color: colors.neutral,
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    lineHeight: 22,
  },
});
