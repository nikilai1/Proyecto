import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, Pressable } from "react-native";
import allProducts from "../data/products.json";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import {colors} from "../global/colors"

function ItemListCategories({ category, setCategorySelected, setProductDetailId }) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const filteredProducts = allProducts.filter(product => {
      return category ? product.category === category : true;
    }).filter(product => {
      return product.title.toLowerCase().includes(keyword.toLowerCase());
    });
    setProducts(filteredProducts);
  }, [category, keyword]);

  return (
    <View style={styles.container}>
      <Pressable onPress={()=> setCategorySelected('')}>
        <Text style={styles.homeLink}>Inicio</Text>
      </Pressable>
      <Search onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem product={item} setProductDetailId={setProductDetailId} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#c5d3e8",
  },
  homeLink: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ItemListCategories;
