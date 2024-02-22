import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";

const CategoryItem = ({ category, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("ItemListCategories", {category})}>
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    margin: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  cardContainer: {
    backgroundColor: colors.blue_100,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'InterRegular',
    color: colors.black,
  },
});

export default CategoryItem;
