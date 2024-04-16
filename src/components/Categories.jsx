import { FlatList, StyleSheet, Text, View } from "react-native";
import CategoryItem from "./CategoryItem";
import Counter from "./Counter";
import { useGetCategoriesQuery } from "../services/shopService";
import { colors } from "../global/colors";

function Categories({ navigation }) {
  const { data, isLoading, error } = useGetCategoriesQuery();

  return (
    <View style={styles.container}>
      <Counter />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CategoryItem navigation={navigation} category={item} />
        )}
        keyExtractor={(category) => category}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
    backgroundColor: colors.blue_50,
    
  },
  flatListContainer: {
    marginTop: 10,
    
  },
});
