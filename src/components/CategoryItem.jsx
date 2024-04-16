import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.pressable,
        {
          backgroundColor: pressed ? colors.turquoise_700 : colors.turquoise_500,
          borderColor: colors.magenta_800,
        },
      ]}
      onPress={() => {
        dispatch(setCategorySelected(category));
        navigation.navigate("ItemListCategories", { category });
      }}
    >
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 10,
    overflow: "scroll",
    borderWidth: 2,
    elevation: 5,
  },
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.turquoise_100,
  },
  text: {
    fontFamily: "InterBold",
    fontSize: 20,
    color: colors.magenta_800, 
  },
});
