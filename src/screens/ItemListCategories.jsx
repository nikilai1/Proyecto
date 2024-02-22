import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, ActivityIndicator } from "react-native";
import allProducts from "../data/products.json";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { colors } from "../global/colors";

const ItemListCategories = ({ navigation, route }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  const { category } = route.params;

  useEffect(() => {
    let filteredProducts = allProducts;
    if (category) {
      filteredProducts = filteredProducts.filter((product) => product.category === category);
    }
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setProducts(filteredProducts);
  }, [category, keyword]);

  if (products.length === 0) {
    return (
      <View style={styles.container}>
        <Search onSearch={setKeyword} />
        <ActivityIndicator style={styles.loader} size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue_500,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  loader: {
    marginTop: 20,
  },
  flatListContainer: {
    paddingTop: 20,
  },
});

export default ItemListCategories;
