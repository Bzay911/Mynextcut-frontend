import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

interface Props extends TouchableOpacityProps {
  variant?: "primary" | "secondary";
  textStyle?: TextStyle;
  children: React.ReactNode | string;
}

export function Button({
  children,
  variant = "primary",
  textStyle,
  ...props
}: Props) {
  return (
    <TouchableOpacity
      style={props.style || styles.buttonContainer}
      activeOpacity={0.9}
      {...props}
    >
      {variant === "secondary" ? (
        <View style={styles.secondaryWrapper}>
          {typeof children === "string" ? (
            <Text style={[styles.secondaryText, textStyle]}>{children}</Text>
          ) : (
            children
          )}
        </View>
      ) : typeof children === "string" ? (
        <Text style={textStyle}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    // marginTop: 8,
    overflow: "hidden",
  },
  secondaryWrapper: {
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#9DC228",
  },
  secondaryText: {
    color: "#fbfaff",
  },
});

export default Button;
