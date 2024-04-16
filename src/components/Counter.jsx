import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../global/colors";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.value);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={() => dispatch(decrement())} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.count}>{count}</Text>
        <Pressable onPress={() => dispatch(increment())} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: colors.turquoise_100,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  count: {
    fontSize: 20,
    fontFamily: "InterBold",
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "InterRegular",
    color: colors.blue_900,
  },
});
