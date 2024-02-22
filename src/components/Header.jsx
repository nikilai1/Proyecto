import { Text, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";

function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}


export default Header;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    backgroundColor: colors.blue_400,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: colors.primaryDark,
    paddingTop: 40,
    paddingHorizontal: 20,
    elevation: 5,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
